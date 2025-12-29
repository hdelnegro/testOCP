import { createFileRoute } from "@tanstack/react-router";
import { ReporteComisiones } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/comisiones")({
	component: ComisionesPage,
});

function ComisionesPage() {
	return <ReporteComisiones />;
}

