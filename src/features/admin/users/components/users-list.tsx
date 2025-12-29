import { useState } from "react";
import type { User } from "../types/user.type";
import { useGetUsers } from "../hooks/useGetUsers";
import { Button } from "@/shared/components/ui/button";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Input } from "@/shared/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface UsersListProps {
  onEditUser: (user: User) => void;
  onViewUser: (user: User) => void;
}

export function UsersList({ onEditUser, onViewUser }: UsersListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: usersResponse,
    isLoading,
    error,
  } = useGetUsers({
    page: currentPage,
    limit: pageSize,
    search: debouncedSearchTerm || undefined,
  });

  const users = usersResponse?.data || [];
  const pagination = usersResponse?.pagination;

  const getRoleBadgeVariant = (role?: string) => {
    switch (role) {
      case "Administrador":
        return "default" as const;
      case "Editor":
        return "secondary" as const;
      case "Visualizador":
        return "outline" as const;
      default:
        return "outline" as const;
    }
  };

  const getStatusBadgeVariant = (activo: boolean) => {
    return activo ? ("outline" as const) : ("destructive" as const);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    if (!name || typeof name !== "string") return "NN";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination && currentPage < pagination.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de usuarios</CardTitle>
        <CardDescription>
          Gestiona todos los usuarios de la plataforma
        </CardDescription>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button variant="secundario">
            <Plus className="mr-2 h-4 w-4" />
            Filtros
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Cargando usuarios...</span>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            Error al cargar los usuarios. Por favor, intenta de nuevo.
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha de Registro</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No se encontraron usuarios
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {getInitials(user.nombre_completo)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {user.nombre_completo}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {user.correo_electronico}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getRoleBadgeVariant(user.rol?.nombre)}>
                          {user.rol?.nombre || "Sin rol"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(user.activo)}>
                          {user.activo ? "Activo" : "Inactivo"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatDate(user.created_at)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="iconoSecundario" className="">
                              <span className="sr-only">Abrir menú</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => onViewUser(user)}>
                              Ver perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEditUser(user)}>
                              Editar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-between px-2 py-4">
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-muted-foreground">
                    Mostrando{" "}
                    <span className="font-medium">
                      {(currentPage - 1) * pageSize + 1}
                    </span>{" "}
                    a{" "}
                    <span className="font-medium">
                      {Math.min(currentPage * pageSize, pagination.total)}
                    </span>{" "}
                    de <span className="font-medium">{pagination.total}</span>{" "}
                    usuarios
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="secundario"
                    size="sm"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                  </Button>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">
                      Página {currentPage} de {pagination.totalPages}
                    </span>
                  </div>
                  <Button
                    variant="secundario"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === pagination.totalPages}
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
