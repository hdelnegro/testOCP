import { UserPlus } from "lucide-react";
import { useState } from "react";

import type { User } from "./types/user.type";
import { useGetUsers } from "./hooks/useGetUsers";
import { Button } from "@/shared/components/ui/button";
import { UsersList } from "./components/users-list";
import { UsersStats } from "./components/users-stats";
import { CreateUserDialog } from "./components/create-user-dialog";
import { EditUserDialog } from "./components/edit-user-dialog";
import { UserDetailsDialog } from "./components/user-detail-dialog";

export default function UsersManagementPage() {
  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [editUserOpen, setEditUserOpen] = useState(false);
  const [userDetailsOpen, setUserDetailsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { data: usersResponse } = useGetUsers({
    page: 1,
    limit: 100,
  });

  const users = usersResponse?.data || [];
  const totalUsers = usersResponse?.pagination?.total || 0;

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setEditUserOpen(true);
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setUserDetailsOpen(true);
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center mt-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Gestión de usuarios
            </h1>
            <Button variant="primario" onClick={() => setCreateUserOpen(true)}>
              <UserPlus className="mr-2 h-4 w-4" />
              Crear usuario
            </Button>
          </div>

          <p className="text-muted-foreground">
            Administra usuarios, roles y permisos de la plataforma
          </p>
        </div>

        <UsersStats users={users} totalUsers={totalUsers} />

        <UsersList onEditUser={handleEditUser} onViewUser={handleViewUser} />
      </div>

      <CreateUserDialog
        open={createUserOpen}
        onOpenChange={setCreateUserOpen}
      />
      <EditUserDialog
        open={editUserOpen}
        onOpenChange={setEditUserOpen}
        user={selectedUser}
      />
      <UserDetailsDialog
        open={userDetailsOpen}
        onOpenChange={setUserDetailsOpen}
        user={selectedUser}
      />
    </>
  );
}
