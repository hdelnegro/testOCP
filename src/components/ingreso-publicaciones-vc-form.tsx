import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoPublicacionesForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }
  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">INGRESO PUBLICACIONES VIALIDAD COMPLEMENTARIA</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Código Diario */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Código Diario</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="DA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DA">DA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Código Proyecto */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Código Proyecto</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="TRB" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TRB">TRB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Código Sector */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Código Sector</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="CCO" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CCO">CCO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Número Factura */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Número Factura</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="1001659" />
            </div>
          </div>

          {/* Fecha Factura */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Factura</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2006-05-29" />
            </div>
          </div>

          {/* Monto Factura */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Monto Factura</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="56,258" />
            </div>
          </div>

          {/* Decreto */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Decreto</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* Rol */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Rol</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* Número TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Número TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="4578" />
            </div>
          </div>

          {/* Fecha TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2006-02-16" />
            </div>
          </div>

          {/* Número Resol. */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Número Resol.</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="479" />
            </div>
          </div>

          {/* Fecha Resol */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Resol</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2006-07-20" />
            </div>
          </div>

          {/* N. Guía Remisión */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">N. Guía Remisión</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="60937" />
            </div>
          </div>

          {/* F. Guía Remisión */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">F. Guía Remisión</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2006-08-07" />
            </div>
          </div>

          {/* Observaciones */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className="border-r p-2 flex items-start pt-3">
              <span className="text-xs font-medium">Observaciones</span>
            </div>
            <div className="p-2">
              <Textarea className="min-h-[80px] text-xs" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-3 mt-4">
        <Button variant="secundario">
          Cancelar
        </Button>
        <Button onClick={() => setIsConfirmModalOpen(true)}>Guardar</Button>
      </div>
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </div>
  )
}
