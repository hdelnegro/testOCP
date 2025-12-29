import { ReporteBase } from "./reporte-base";
import { getDesgloseTas, downloadDesgloseTasExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReporteDesgloseTas() {
	return (
		<ReporteBase
			title="Desglose Tasaciones"
			description="Seleccione un proyecto para consultar el desglose de tasaciones"
			endpoint={getDesgloseTas}
			queryKey="desglose-tas"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver el desglose de tasaciones"
			noDataMessage="No se encontraron registros para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadDesgloseTasExcel}
					fileNamePrefix="desglose-tas"
				/>
			)}
		/>
	);
}
