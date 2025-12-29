import { createFileRoute } from "@tanstack/react-router";
import { ReporteLotes } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/lotes")({
	component: LotesPage,
});

function LotesPage() {
	return <ReporteLotes />;
}
