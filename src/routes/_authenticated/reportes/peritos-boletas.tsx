import { createFileRoute } from "@tanstack/react-router";
import { ReportePeritosBoletas } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/peritos-boletas")({
	component: PeritosBoletasPage,
});

function PeritosBoletasPage() {
	return <ReportePeritosBoletas />;
}

