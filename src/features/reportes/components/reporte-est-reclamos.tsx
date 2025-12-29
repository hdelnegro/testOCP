import { ReporteBase } from "./reporte-base";
import { getEstReclamos, downloadEstReclamosExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteEstReclamos() {
	return (
		<ReporteBase
			title="Estado de Reclamos"
			description="Seleccione un proyecto para consultar el estado de los reclamos"
			endpoint={getEstReclamos}
			queryKey="est-reclamos"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver el estado de los reclamos"
			noDataMessage="No se encontraron reclamos para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadEstReclamosExcel}
					fileNamePrefix="est-reclamos"
				/>
			)}
		/>
	);
}

