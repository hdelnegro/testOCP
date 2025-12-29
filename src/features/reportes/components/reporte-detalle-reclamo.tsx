import { ReporteBase } from "./reporte-base";
import { getDetalleReclamo, downloadDetalleReclamoExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteDetalleReclamo() {
	return (
		<ReporteBase
			title="Detalle Reclamos"
			description="Seleccione un proyecto para consultar el detalle de reclamos"
			endpoint={getDetalleReclamo}
			queryKey="detalle-reclamo"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver el detalle de reclamos"
			noDataMessage="No se encontraron reclamos para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadDetalleReclamoExcel}
					fileNamePrefix="detalle-reclamo"
				/>
			)}
		/>
	);
}
