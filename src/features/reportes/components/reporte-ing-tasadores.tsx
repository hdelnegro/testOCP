import { ReporteBase } from "./reporte-base";
import { getIngTasadores, downloadIngTasadoresExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteIngTasadores() {
	return (
		<ReporteBase
			title="Ingenieros Tasadores"
			description="Seleccione un proyecto para consultar los ingenieros tasadores"
			endpoint={getIngTasadores}
			queryKey="ing-tasadores"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver los ingenieros tasadores"
			noDataMessage="No se encontraron registros para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadIngTasadoresExcel}
					fileNamePrefix="ing-tasadores"
				/>
			)}
		/>
	);
}
