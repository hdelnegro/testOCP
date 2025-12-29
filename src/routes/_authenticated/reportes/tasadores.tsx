import { createFileRoute } from "@tanstack/react-router";
import { ReporteTasadores } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/tasadores")({
	component: TasadoresPage,
});

function TasadoresPage() {
	return <ReporteTasadores />;
}

