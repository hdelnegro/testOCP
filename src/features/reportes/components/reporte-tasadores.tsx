import { ReporteBase } from "./reporte-base";
import { getTasadores, downloadTasadoresExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteTasadores() {
	return (
		<ReporteBase
			title="Tasadores"
			description="Seleccione un proyecto para consultar los tasadores"
			endpoint={getTasadores}
			queryKey="tasadores"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver los tasadores"
			noDataMessage="No se encontraron tasadores para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadTasadoresExcel}
					fileNamePrefix="tasadores"
				/>
			)}
		/>
	);
}

