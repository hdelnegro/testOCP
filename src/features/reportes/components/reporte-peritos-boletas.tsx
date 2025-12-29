import { ReporteBase } from "./reporte-base";
import { getPeritosBoletas, downloadPeritosBoletasExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReportePeritosBoletas() {
	return (
		<ReporteBase
			title="Peritos Boletas"
			description="Seleccione un proyecto para consultar las boletas de peritos"
			endpoint={getPeritosBoletas}
			queryKey="peritos-boletas"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver las boletas de peritos"
			noDataMessage="No se encontraron boletas para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadPeritosBoletasExcel}
					fileNamePrefix="peritos-boletas"
				/>
			)}
		/>
	);
}
