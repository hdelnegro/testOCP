import { createFileRoute } from "@tanstack/react-router";
import { ReporteLotesComision } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/lotes-comision")({
	component: LotesComisionPage,
});

function LotesComisionPage() {
	return <ReporteLotesComision />;
}

