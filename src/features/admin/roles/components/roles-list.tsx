import { Loader2 } from "lucide-react";
import { useGetRoles } from "../hooks/useGetRoles";
import type { Role } from "../types/roles.type";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

interface RolesListProps {
	onSelectRole: (role: Role) => void;
}

export function RolesList({ onSelectRole }: RolesListProps) {
  const {
    data: rolesResponse,
    isLoading,
    error,
  } = useGetRoles({
    page: 1,
    limit: 100,
  });

  const roles = rolesResponse?.data || [];

  return (
    <Card>
      <CardHeader className="flex justify-between items-start">
        <div>
          <CardTitle>Roles del sistema</CardTitle>
          <CardDescription>
            Gestiona los roles y sus permisos asociados
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Cargando roles...</span>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            Error al cargar los roles. Por favor, intenta de nuevo.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role) => (
              <Card
                key={role.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onSelectRole(role)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{role.nombre}</CardTitle>
                      <CardDescription className="text-sm">
                        {role.descripcion}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Usuarios:</span>
                      <span className="font-medium">{role.usuarios_count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
