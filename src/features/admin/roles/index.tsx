import { useState } from "react";
import type { Role } from "./types/roles.type";
import { RolesList } from "./components/roles-list";
import { CreateRoleDialog } from "./components/create-role-dialog";
import { RoleDetailsDialog } from "./components/role-details-dialog";
import { useGetRoles } from "./hooks/useGetRoles";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";

export default function RolesManagementPage() {
  const [createRoleOpen, setCreateRoleOpen] = useState(false);
  const [roleDetailsOpen, setRoleDetailsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const { refetch } = useGetRoles({ page: 1, limit: 100 });

  const handleCreateRole = () => {
    setCreateRoleOpen(true);
  };

  const handleSelectRole = (role: Role) => {
    setSelectedRole(role);
    setRoleDetailsOpen(true);
  };

  const handleRoleCreated = () => {
    refetch();
  };

  const handleRoleUpdated = () => {
    refetch();
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center mt-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Gestión de roles
            </h1>
            <Button variant="primario" onClick={handleCreateRole}>
              <Plus className="mr-2 h-4 w-4" />
              Crear rol
            </Button>
          </div>

          <p className="text-muted-foreground">
            Administra los roles y permisos del sistema
          </p>
        </div>

        <RolesList onSelectRole={handleSelectRole} />
      </div>

      <CreateRoleDialog
        open={createRoleOpen}
        onOpenChange={setCreateRoleOpen}
        onSuccess={handleRoleCreated}
      />

      <RoleDetailsDialog
        open={roleDetailsOpen}
        onOpenChange={setRoleDetailsOpen}
        role={selectedRole}
        onSuccess={handleRoleUpdated}
      />
    </>
  );
}
