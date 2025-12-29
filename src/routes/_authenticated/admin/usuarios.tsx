import AdminPage from "@/features/admin";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/usuarios")({
  component: UsuariosPage,
});

function UsuariosPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <AdminPage />
    </main>
  );
}
