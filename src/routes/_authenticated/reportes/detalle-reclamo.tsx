import { createFileRoute } from "@tanstack/react-router";
import { ReporteDetalleReclamo } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/detalle-reclamo")({
	component: DetalleReclamoPage,
});

function DetalleReclamoPage() {
	return <ReporteDetalleReclamo />;
}

