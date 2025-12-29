import type React from "react";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useCreateRole } from "../hooks/useCreateRole";

interface CreateRoleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreateRoleDialog({
  open,
  onOpenChange,
  onSuccess,
}: CreateRoleDialogProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
  });

  const { createRole, isLoading } = useCreateRole();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createRole({
        nombre: formData.nombre,
        descripcion: formData.descripcion,
      });

      // Limpiar formulario y cerrar modal
      setFormData({
        nombre: "",
        descripcion: "",
      });
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      // El error se maneja en el hook
      console.error("Error al crear rol:", error);
    }
  };

  const handleCancel = () => {
    // Limpiar formulario al cancelar
    setFormData({
      nombre: "",
      descripcion: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo rol</DialogTitle>
          <DialogDescription>
            Crea un nuevo rol para asignar permisos específicos a los usuarios.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre del rol *</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, nombre: e.target.value }))
              }
              placeholder="Ej: Editor de Proyectos"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción *</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  descripcion: e.target.value,
                }))
              }
              placeholder="Describe las responsabilidades y alcance de este rol..."
              rows={4}
              required
              disabled={isLoading}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="secundario"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !formData.nombre || !formData.descripcion}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creando...
                </>
              ) : (
                "Crear rol"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
