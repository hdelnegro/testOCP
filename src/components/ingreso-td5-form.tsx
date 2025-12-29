import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoTd5Form() {
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
              <h2 className="text-sm font-bold uppercase text-white">INGRESO TD5</h2>
            </div>
          </CardHeader>

          {/* ID_LOTE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">ID_LOTE</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="ID Lote" />
            </div>
          </div>

          {/* LOTE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">LOTE</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Lote" />
            </div>
          </div>

          {/* RESOL */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">RESOL</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Resolución" />
            </div>
          </div>

          {/* RESOL_MODIF */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">RESOL_MODIF</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Resolución Modificación" />
            </div>
          </div>

          {/* TD5PE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">TD5PE</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="TD5PE" />
            </div>
          </div>

          {/* F_TD5PE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_TD5PE</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_COMP_PAGO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_COMP_PAGO</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_CONSIG */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_CONSIG</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_INF_PAGO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_INF_PAGO</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_GR_VC */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_GR_VC</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* EST_LOTE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">EST_LOTE</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Estado Lote" />
            </div>
          </div>

          {/* ETAPA_LOTE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">ETAPA_LOTE</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Etapa Lote" />
            </div>
          </div>

          {/* MONTO_TAS */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">MONTO_TAS</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="Monto Tasación" />
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

export default IngresoTd5Form
