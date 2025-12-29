import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/reportes")({
	component: ReportesLayout,
});

function ReportesLayout() {
	return (
		<div className="flex flex-col h-full">
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}

