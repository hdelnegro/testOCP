import { ReporteBase } from "./reporte-base";
import { getComisiones, downloadComisionesExcel } from "../services/reportes.service";

import { Button } from "@/shared/components/ui/button";
import { FileSpreadsheet } from "lucide-react";
import { useState } from "react";
// Actually, I should check what toast library is used. Based on previous files, I haven't seen one explicitly, but standard is often sonner or useToast.
// I'll check imports in other files if I can, but for now I'll assume standard error handling or just console.error if toast isn't obvious.
// Wait, I can see imports in other files. `reporte-base.tsx` uses `lucide-react`.
// I'll stick to a simple implementation first.

export function ReporteComisiones() {
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownload = async (codProy: string) => {
		try {
			setIsDownloading(true);
			const blob = await downloadComisionesExcel(codProy);
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `comisiones-${codProy}-${new Date().toISOString().split('T')[0]}.xlsx`;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		} catch (error) {
			console.error("Error downloading excel:", error);
			// alert("Error al descargar el excel"); // Simple fallback
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<ReporteBase
			title="Comisiones"
			description="Seleccione un proyecto para consultar las comisiones"
			endpoint={getComisiones}
			queryKey="comisiones"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver las comisiones"
			noDataMessage="No se encontraron comisiones para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<Button
					variant="secundario"
					disabled={!selectedProyecto || isDownloading}
					onClick={() => handleDownload(selectedProyecto)}
					className="gap-2"
				>
					<FileSpreadsheet className="h-4 w-4" />
					{isDownloading ? "Descargando..." : "Descargar Excel"}
				</Button>
			)}
		/>
	);
}

