import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoReceptoresForm() {
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
              <h2 className="text-sm font-bold uppercase text-white">INGRESO RECEPTORES</h2>
            </div>
          </CardHeader>

          {/* COD_RECEP */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">COD_RECEP</Label>
              <Select>
                <SelectTrigger className="mt-1 h-8 text-xs">
                  <SelectValue placeholder="01" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                  <SelectItem value="02">02</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* COD_PROY */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">COD_PROY</Label>
              <Select>
                <SelectTrigger className="mt-1 h-8 text-xs">
                  <SelectValue placeholder="VM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vm">VM</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* N° Boleta */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N° Boleta</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="1571" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">Fecha Boleta</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="4/25/2003" />
            </div>
          </div>

          {/* MONTO_BOLETA */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">MONTO_BOLETA</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="177,778" />
            </div>
          </div>

          {/* DECRETO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">DECRETO</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="1812/2002, 1811/2002, 1793/2002..." />
            </div>
          </div>

          {/* OBSERVACION D.J. */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">OBSERVACION D.J.</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="TOMAS DE POSESIÓN MATERIAL" />
            </div>
          </div>

          {/* N° TD5 */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N° TD5</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="347" />
            </div>
          </div>

          {/* Fecha TD5 */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">Fecha TD5</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="1/28/2003" />
            </div>
          </div>

          {/* N°Resol */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N°Resol</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="731" />
            </div>
          </div>

          {/* Fecha Resol */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">Fecha Resol</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="5/27/2003" />
            </div>
          </div>

          {/* N° GDR */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N° GDR</Label>
              <Input className="mt-1 h-8 text-xs" placeholder="39770" />
            </div>
          </div>

          {/* Fecha GDR */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">Fecha GDR</Label>
              <Input type="date" className="mt-1 h-8 text-xs" placeholder="6/9/2003" />
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

export default IngresoReceptoresForm
