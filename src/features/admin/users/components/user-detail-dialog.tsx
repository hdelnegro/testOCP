import { Calendar, Mail, Shield, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Separator } from "@/shared/components/ui/separator";
import type { User } from "../types/user.type";

interface UserDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
}

export function UserDetailsDialog({
  open,
  onOpenChange,
  user,
}: UserDetailsDialogProps) {
  if (!user) return null;

  const getStatusBadge = (activo: boolean) => {
    return (
      <Badge
        variant="outline"
        className={
          activo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }
      >
        {activo ? "Activo" : "Inactivo"}
      </Badge>
    );
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      Administrador: "bg-red-100 text-red-800",
      Editor: "bg-blue-100 text-blue-800",
      Visualizador: "bg-green-100 text-green-800",
    };
    return (
      <Badge
        variant="outline"
        className={
          colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800"
        }
      >
        {role}
      </Badge>
    );
  };

  const getInitials = (name: string) => {
    if (!name || typeof name !== "string") return "NN";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalles del usuario</DialogTitle>
          <DialogDescription>
            Información completa y actividad del usuario seleccionado.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header con información básica */}
          <div className="flex items-start space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">
                {getInitials(user.nombre_completo)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{user.nombre_completo}</h2>
                <div className="flex gap-2">
                  {user.rol?.nombre && getRoleBadge(user.rol.nombre)}
                  {getStatusBadge(user.activo)}
                </div>
              </div>
              <p className="text-muted-foreground">{user.correo_electronico}</p>
            </div>
          </div>

          <Separator />

          {/* Información de contacto y detalles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  Información personal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user.correo_electronico}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    Fecha de registro: {formatDate(user.created_at)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Permisos y acceso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Rol del sistema:</p>
                  <p className="text-sm text-muted-foreground">
                    {user.rol?.nombre || "Sin rol"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.rol?.descripcion || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Estado de la cuenta:</p>
                  <p className="text-sm text-muted-foreground">
                    {user.activo ? "Cuenta activa" : "Cuenta inactiva"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">ID de usuario:</p>
                  <p className="text-sm text-muted-foreground">#{user.id}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
