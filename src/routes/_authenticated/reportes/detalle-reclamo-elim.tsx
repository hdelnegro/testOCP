import { createFileRoute } from "@tanstack/react-router";
import { ReporteDetalleReclamoElim } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/detalle-reclamo-elim")({
	component: DetalleReclamoElimPage,
});

function DetalleReclamoElimPage() {
	return <ReporteDetalleReclamoElim />;
}

