import { Shield, Users } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import UsersManagementPage from "./users";
import RolesManagementPage from "./roles";

export default function AdminPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 pt-0">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between items-center mt-2">
          <h1 className="text-3xl font-bold tracking-tight">Administración</h1>
        </div>

        <p className="text-muted-foreground">
          Administra usuarios, roles y permisos de la plataforma
        </p>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="gap-4 flex justify-center items-center">
          <TabsTrigger
            value="users"
            className="flex items-center whitespace-nowrap"
          >
            <Users className="mr-2 h-4 w-4" />
            Usuarios
          </TabsTrigger>
          <TabsTrigger
            value="roles"
            className="flex items-center whitespace-nowrap"
          >
            <Shield className="mr-2 h-4 w-4" />
            Roles y Permisos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <UsersManagementPage />
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <RolesManagementPage />
        </TabsContent>
      </Tabs>
    </div>
  );
}
