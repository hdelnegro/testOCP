import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  User,
  Clock,
  FileText,
  Activity,
  Hash,
} from "lucide-react";
import type { ActivityLog } from "../types/activity-logs.type";

interface ActividadDetalleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actividad?: ActivityLog | null;
}

const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), "dd/MM/yyyy HH:mm", { locale: es });
  } catch (e) {
    return dateString;
  }
};

export function ActividadDetalleModal({
  open,
  onOpenChange,
  actividad,
}: ActividadDetalleModalProps) {
  if (!actividad) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Detalle de Auditoría
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Información Principal */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-primary">
              Información General
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 rounded-lg p-4">
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  Acción
                </span>
                <div className="mt-1">
                  <Badge variant="outline">{actividad.accion}</Badge>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  Fecha
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-base">
                    {formatDate(actividad.fecha)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:col-span-2">
                <span className="font-medium text-sm text-muted-foreground">
                  Descripción
                </span>
                <div className="flex items-start gap-2 mt-1">
                  <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-base">{actividad.descripcion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entidad Afectada */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-primary">
              Entidad Afectada
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 rounded-lg p-4">
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  Entidad
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span className="text-base">{actividad.entidad}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  ID de Entidad
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Hash className="h-4 w-4 text-muted-foreground" />
                  <span className="text-base">{actividad.entidad_id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Usuario Responsable */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-primary">
              Usuario Responsable
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 rounded-lg p-4">
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  Nombre
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-base">
                    {actividad.usuario.nombre_completo}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-muted-foreground">
                  Email
                </span>
                <span className="text-base">
                  {actividad.usuario.correo_electronico}
                </span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="secundario" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}