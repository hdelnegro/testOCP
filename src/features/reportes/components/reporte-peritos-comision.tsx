import { ReporteBase } from "./reporte-base";
import { getPeritosComision, downloadPeritosComisionExcel } from "../services/reportes.service";
import { ReporteDownloadButton } from "./reporte-download-button";

export function ReportePeritosComision() {
	return (
		<ReporteBase
			title="Peritos Comisión"
			description="Seleccione un proyecto para consultar las comisiones de peritos"
			endpoint={getPeritosComision}
			queryKey="peritos-comision"
			emptyStateMessage="Seleccione un proyecto y haga clic en consultar para ver las comisiones de peritos"
			noDataMessage="No se encontraron comisiones para el proyecto seleccionado"
			renderCustomActions={({ selectedProyecto }) => (
				<ReporteDownloadButton
					codProy={selectedProyecto}
					downloadFn={downloadPeritosComisionExcel}
					fileNamePrefix="peritos-comision"
				/>
			)}
		/>
	);
}
