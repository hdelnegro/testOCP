import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import type { ActivityLog } from "../types/activity-logs.type";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const formatFecha = (fecha: string) => {
  return format(new Date(fecha), "dd/MM/yyyy HH:mm", { locale: es });
};

export const actividadesColumns: ColumnDef<ActivityLog>[] = [
  {
    id: "accion",
    accessorKey: "accion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Acción
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <Badge variant="outline">{row.original.accion}</Badge>;
    },
  },
  {
    id: "entidad",
    accessorKey: "entidad",
    header: "Entidad",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span className="font-medium">{row.original.entidad}</span>
          <span className="text-xs text-muted-foreground">
            ID: {row.original.entidad_id}
          </span>
        </div>
      );
    },
  },
  {
    id: "descripcion",
    accessorKey: "descripcion",
    header: "Descripción",
    cell: ({ row }) => {
      return (
        <div className="max-w-[300px] truncate" title={row.original.descripcion}>
          {row.original.descripcion}
        </div>
      );
    },
  },
  {
    id: "usuario",
    accessorKey: "usuario.nombre_completo",
    header: "Usuario",
    cell: ({ row }) => {
      const usuario = row.original.usuario;
      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              {usuario.nombre_completo
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">
              {usuario.nombre_completo}
            </span>
            <span className="text-xs text-muted-foreground">
              {usuario.correo_electronico}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    id: "fecha",
    accessorKey: "fecha",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-sm">{formatFecha(row.original.fecha)}</div>;
    },
  },
];