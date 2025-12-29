import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoDatosPublicacionesForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO DE DATOS PUBLICACIONES</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* COD_DIARIO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_DIARIO</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="DC" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DC">DC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* COD_PROY */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_PROY</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="TCH" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TCH">TCH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* N_FACTURA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_FACTURA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="210807" />
            </div>
          </div>

          {/* F_FACTURA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_FACTURA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2025-03-12" />
            </div>
          </div>

          {/* MONTO_FACTURA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">MONTO_FACTURA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="22,750" />
            </div>
          </div>

          {/* DECRETO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">DECRETO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* ROL */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">ROL</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* N_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="3329" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2025-01-31" />
            </div>
          </div>

          {/* RESOL */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RESOL</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="904" />
            </div>
          </div>

          {/* Fecha de Resolución */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2025-03-25" />
            </div>
          </div>

          {/* N_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="28165" />
            </div>
          </div>

          {/* F_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2025-04-03" />
            </div>
          </div>

          {/* OBSERVACION */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className=" border-r p-2 flex items-start pt-3">
              <span className="text-xs font-medium">OBSERVACION</span>
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
