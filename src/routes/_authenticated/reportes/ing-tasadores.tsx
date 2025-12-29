import { createFileRoute } from "@tanstack/react-router";
import { ReporteIngTasadores } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/ing-tasadores")({
	component: IngTasadoresPage,
});

function IngTasadoresPage() {
	return <ReporteIngTasadores />;
}

