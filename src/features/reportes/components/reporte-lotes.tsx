import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { DataTable } from "@/shared/components/data-table/data-table";
import { Button } from "@/shared/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { Label } from "@/shared/components/ui/label";
import { getProyectos, getLotes, downloadLoteExcel, type Proyecto, type Lote } from "../services/reportes.service";
import { Inbox, Search } from "lucide-react";
import { useSidebar } from "@/shared/components/ui/sidebar";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteLotes() {
	const [selectedProyecto, setSelectedProyecto] = useState<string>("");
	const [shouldFetchLotes, setShouldFetchLotes] = useState(false);

	// Query para obtener proyectos
	const { data: proyectosData, isLoading: isLoadingProyectos } = useQuery({
		queryKey: ["proyectos"],
		queryFn: getProyectos,
	});

	// Query para obtener lotes (solo se ejecuta cuando shouldFetchLotes es true)
	const {
		data: lotesData,
		isLoading: isLoadingLotes,
		isError: isErrorLotes,
	} = useQuery({
		queryKey: ["lotes", selectedProyecto],
		queryFn: () => getLotes(selectedProyecto),
		enabled: shouldFetchLotes && !!selectedProyecto,
	});

	const handleConsultar = () => {
		if (selectedProyecto) {
			setShouldFetchLotes(true);
		}
	};

	// Generar columnas dinámicamente basadas en los datos
	const generateColumns = (data: Lote[]): ColumnDef<Lote>[] => {
		if (!data || data.length === 0) return [];

		// Obtener todas las claves únicas del primer objeto
		const keys = Object.keys(data[0]);

		return keys.map((key) => ({
			accessorKey: key,
			header: key.toUpperCase().replace(/_/g, " "),
			cell: ({ row }) => {
				const value = row.getValue(key);
				return (
					<div className="min-w-[150px] whitespace-nowrap" title={String(value)}>
						{String(value ?? "")}
					</div>
				);
			},
			size: 150,
			minSize: 150,
		}));
	};

	// Manejar diferentes estructuras de respuesta
	const lotes = Array.isArray(lotesData?.data)
		? lotesData.data
		: Array.isArray(lotesData?.lotes)
			? lotesData.lotes
			: Array.isArray(lotesData)
				? lotesData
				: lotesData && typeof lotesData === "object" && !Array.isArray(lotesData)
					? Object.values(lotesData).filter((item) => Array.isArray(item))[0] || []
					: [];

	const columns = generateColumns(lotes as Lote[]);
	const hasData = lotes.length > 0 && shouldFetchLotes;
	const showEmptyState = !shouldFetchLotes || (!hasData && !isLoadingLotes);

	const { state } = useSidebar();

	// Calcular el ancho disponible considerando el sidebar
	const sidebarWidth = state === "expanded" ? "18rem" : "6rem"; // 256px : 48px
	const availableWidth = `calc(100vw - ${sidebarWidth})`;

	return (
		<main className="flex gap-4 overflow-y-hidden w-full"
			style={{
				width: availableWidth,
				overflowX: 'auto'
			}}>
			<div className="flex flex-col gap-4 p-4 pt-0 w-full min-w-0">
				<div className="flex flex-col gap-1">
					<div className="flex flex-row justify-between items-center mt-6">
						<h1 className="text-3xl font-bold tracking-tight">Reporte de Lotes</h1>
					</div>
					<p className="text-muted-foreground">
						Seleccione un proyecto para consultar los lotes
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Filtros de búsqueda</CardTitle>
						<CardDescription>
							Seleccione un proyecto y haga clic en consultar para ver los lotes
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col sm:flex-row gap-4 items-end">
							<div className="flex-1 w-full space-y-2 min-w-0">
								<Label htmlFor="proyecto">Proyecto</Label>
								<Select
									value={selectedProyecto}
									onValueChange={(value) => {
										setSelectedProyecto(value);
										setShouldFetchLotes(false);
									}}
									disabled={isLoadingProyectos}
								>
									<SelectTrigger id="proyecto" className="w-full">
										<SelectValue placeholder="Seleccione un proyecto" />
									</SelectTrigger>
									<SelectContent
										className="max-h-[300px]"
										position="item-aligned"
									>
										{proyectosData?.proyectos?.map((proyecto: Proyecto) => (
											<SelectItem
												key={proyecto.COD_PROY}
												value={proyecto.COD_PROY}
											>
												{proyecto.ALIAS || proyecto.NOM_PROY}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<Button
								onClick={handleConsultar}
								disabled={!selectedProyecto || isLoadingLotes}
								className="w-full sm:w-auto"
							>
								<Search className="mr-2 h-4 w-4" />
								Consultar
							</Button>
						</div>
					</CardContent>
				</Card>

				{showEmptyState && (
					<Card>
						<CardContent className="flex flex-col items-center justify-center py-16">
							<Inbox className="h-12 w-12 text-muted-foreground mb-4" />
							<p className="text-lg font-medium text-muted-foreground">
								{!shouldFetchLotes
									? "Seleccione un proyecto y haga clic en consultar para ver los lotes"
									: "No se encontraron lotes para el proyecto seleccionado"}
							</p>
						</CardContent>
					</Card>
				)}

				{hasData && (
					<Card>
						<CardHeader>
							<CardTitle>Resultados</CardTitle>
							<CardDescription>
								{isLoadingLotes
									? "Cargando lotes..."
									: `${lotes.length} lote(s) encontrado(s)`}
							</CardDescription>
						</CardHeader>
						<CardContent>
							{isLoadingLotes ? (
								<div className="flex items-center justify-center py-8">
									<p className="text-muted-foreground">Cargando...</p>
								</div>
							) : isErrorLotes ? (
								<div className="flex items-center justify-center py-8">
									<p className="text-destructive">
										Error al cargar los lotes. Por favor, intente nuevamente.
									</p>
								</div>
							) : (
								<DataTable
									columns={columns}
									data={lotes as Lote[]}
									enableSearch={true}
									searchPlaceholder="Buscar en lotes..."
									pageSize={10}
									enableColumnVisibility={true}
									maxHeight="calc(100vh - 400px)"
									className="w-full"
									customActions={
										<ReporteDownloadButton
											codProy={selectedProyecto}
											downloadFn={downloadLoteExcel}
											fileNamePrefix="lotes"
										/>
									}
								/>
							)}
						</CardContent>
					</Card>
				)}
			</div>
		</main>
	);
}

