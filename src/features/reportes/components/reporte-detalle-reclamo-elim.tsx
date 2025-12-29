import { ReporteBase } from "./reporte-base";
import { getDetalleReclamoElim, downloadDetalleReclamoElimExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteDetalleReclamoElim() {
	return (
		<ReporteBase
			title="Detalle Reclamos Eliminados"
			description="Seleccione un proyecto para consultar el detalle de reclamos eliminados"
			endpoint={getDetalleReclamoElim}
			queryKey="detalle-reclamo-elim"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver el detalle de reclamos eliminados"
			noDataMessage="No se encontraron reclamos eliminados para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadDetalleReclamoElimExcel}
					fileNamePrefix="detalle-reclamo-elim"
				/>
			)}
		/>
	);
}
