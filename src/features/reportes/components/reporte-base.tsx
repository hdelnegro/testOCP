import { useState, useMemo } from "react";
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
import { getProyectos, type Proyecto, type ReporteResponse } from "../services/reportes.service";
import { Inbox, Search } from "lucide-react";
import { useSidebar } from "@/shared/components/ui/sidebar";

interface ReporteBaseProps {
  title: string;
  description: string;
  endpoint: (codProy?: string, page?: number, limit?: number) => Promise<ReporteResponse>;
  queryKey: string;
  emptyStateMessage?: string;
  noDataMessage?: string;
  renderCustomActions?: (props: { selectedProyecto: string; hasData: boolean; isLoading: boolean }) => React.ReactNode;
}

export function ReporteBase({
  title,
  description,
  endpoint,
  queryKey,
  emptyStateMessage = "Seleccione un proyecto y haga clic en consultar para ver los resultados",
  noDataMessage = "No se encontraron resultados para el proyecto seleccionado",
  renderCustomActions,
}: ReporteBaseProps) {
  const [selectedProyecto, setSelectedProyecto] = useState<string>("");
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 50 });

  // Query para obtener proyectos
  const { data: proyectosData, isLoading: isLoadingProyectos } = useQuery({
    queryKey: ["proyectos"],
    queryFn: getProyectos,
  });

  const uniqueProyectos = useMemo(() => {
    if (!proyectosData?.proyectos) return [];
    const seen = new Set();
    return proyectosData.proyectos.filter((p) => {
      const duplicate = seen.has(p.COD_PROY);
      seen.add(p.COD_PROY);
      return !duplicate;
    });
  }, [proyectosData]);

  // Query para obtener datos del reporte
  const {
    data: reporteData,
    isLoading: isLoadingData,
    isError: isErrorData,
  } = useQuery({
    queryKey: [queryKey, selectedProyecto, pagination.pageIndex, pagination.pageSize],
    queryFn: () => endpoint(
      selectedProyecto,
      pagination.pageIndex + 1, // Backend usa páginas basadas en 1
      pagination.pageSize
    ),
    enabled: shouldFetchData && !!selectedProyecto,
  });

  const handleConsultar = () => {
    if (selectedProyecto) {
      setPagination({ pageIndex: 0, pageSize: 50 }); // Reset a la primera página
      setShouldFetchData(true);
    }
  };

  // Generar columnas dinámicamente basadas en los datos
  const generateColumns = (data: any[]): ColumnDef<any>[] => {
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
  const datos = Array.isArray(reporteData?.data)
    ? reporteData.data
    : Array.isArray(reporteData)
      ? reporteData
      : reporteData && typeof reporteData === "object" && !Array.isArray(reporteData)
        ? Object.values(reporteData).filter((item) => Array.isArray(item))[0] || []
        : [];

  const columns = generateColumns(datos);
  const hasData = datos.length > 0 && shouldFetchData;
  const showEmptyState = !shouldFetchData || (!hasData && !isLoadingData);

  // Obtener información de paginación del backend
  const pageCount = reporteData?.pagination?.totalPages || 0;
  const totalRecords = reporteData?.pagination?.total || 0;

  const { state } = useSidebar();

  // Calcular el ancho disponible considerando el sidebar
  const sidebarWidth = state === "expanded" ? "18rem" : "6rem";
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
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          </div>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtros de búsqueda</CardTitle>
            <CardDescription>
              Seleccione un proyecto y haga clic en consultar para ver los resultados
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
                    setShouldFetchData(false);
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
                    {uniqueProyectos.map((proyecto: Proyecto) => (
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
                disabled={!selectedProyecto || isLoadingData}
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
                {!shouldFetchData
                  ? emptyStateMessage
                  : noDataMessage}
              </p>
            </CardContent>
          </Card>
        )}

        {hasData && (
          <Card>
            <CardHeader>
              <CardTitle>Resultados</CardTitle>
              <CardDescription>
                {isLoadingData
                  ? "Cargando datos..."
                  : `${totalRecords} registro(s) encontrado(s)`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingData ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-muted-foreground">Cargando...</p>
                </div>
              ) : isErrorData ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-destructive">
                    Error al cargar los datos. Por favor, intente nuevamente.
                  </p>
                </div>
              ) : (
                <DataTable
                  columns={columns}
                  data={datos}
                  enableSearch={true}
                  searchPlaceholder="Buscar en resultados..."
                  pageSize={pagination.pageSize}
                  enableColumnVisibility={true}
                  maxHeight="calc(100vh - 400px)"
                  className="w-full"
                  // Paginación del servidor
                  manualPagination={true}
                  pageCount={pageCount}
                  pageIndex={pagination.pageIndex}
                  onPaginationChange={(pageIndex, pageSize) => {
                    setPagination({ pageIndex, pageSize });
                  }}
                  customActions={renderCustomActions?.({ selectedProyecto, hasData, isLoading: isLoadingData })}
                />
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}