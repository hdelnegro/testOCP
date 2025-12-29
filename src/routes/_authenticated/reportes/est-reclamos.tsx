import { createFileRoute } from "@tanstack/react-router";
import { ReporteEstReclamos } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/est-reclamos")({
  component: EstReclamosPage,
});

function EstReclamosPage() {
  return <ReporteEstReclamos />;
}

