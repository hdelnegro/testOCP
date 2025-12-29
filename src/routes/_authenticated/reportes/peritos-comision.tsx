import { createFileRoute } from "@tanstack/react-router";
import { ReportePeritosComision } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/peritos-comision")({
	component: PeritosComisionPage,
});

function PeritosComisionPage() {
	return <ReportePeritosComision />;
}

