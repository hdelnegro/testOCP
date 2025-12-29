import { ReporteBase } from "./reporte-base";
import { getLotesComision, downloadLotesComisionExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteLotesComision() {
	return (
		<ReporteBase
			title="Lotes Comisión"
			description="Seleccione un proyecto para consultar los lotes con comisión"
			endpoint={getLotesComision}
			queryKey="lotes-comision"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver los lotes con comisión"
			noDataMessage="No se encontraron lotes para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadLotesComisionExcel}
					fileNamePrefix="lotes-comision"
				/>
			)}
		/>
	);
}
