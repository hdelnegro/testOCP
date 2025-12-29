import { createFileRoute } from "@tanstack/react-router";
import { ReporteDesgloseTas } from "@/features/reportes";

export const Route = createFileRoute("/_authenticated/reportes/desglose-tas")({
	component: ReporteDesgloseTas,
});
