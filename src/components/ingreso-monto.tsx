import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoMontoForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }
  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-primary-500">
        <CardContent className="p-0">
          <CardHeader className="!p-0">
            <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
              <h2 className="text-sm font-bold uppercase text-white">INGRESO MONTO</h2>
            </div>
          </CardHeader>

          {/* COD_RECEP */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N° Boleta</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="1571" />
            </div>
          </div>

          {/* COD_PROY */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">Fecha Boleta</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="4/25/2003" />
            </div>
          </div>

          {/* N° Boleta */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">MONTO_BOLETA</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="1571" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">MONTO_en_letras</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="4/25/2003" />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <Button variant="secundario">Cancelar</Button>
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

export default IngresoMontoForm
