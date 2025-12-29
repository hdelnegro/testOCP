import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"
import { Textarea } from "@/shared/components/ui/textarea"

export function IngresoPeritosjudicialesForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO PERITOS JUDICIALES</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">

          {/* COD_PERITO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">COD_PERITO</Label>
              <Select>
                <SelectTrigger className="mt-1 h-8 text-xs">
                  <SelectValue />
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
                  <SelectValue />
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
              <Input className="mt-1 h-8 text-xs" defaultValue="0" />
            </div>
          </div>

          {/* F_BOLETA */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_BOLETA</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* M_BOLETA */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">M_BOLETA</Label>
              <Input className="mt-1 h-8 text-xs" defaultValue="0" />
            </div>
          </div>

          {/* EXPEDIENTE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">EXPEDIENTE</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* DECRETO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">DECRETO</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* FECHA DECRETO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">FECHA DECRETO</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* CAUSA ROL */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">CAUSA ROL</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* JUZGADO */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">JUZGADO</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* ORD_CDE */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">ORD_CDE:</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_ORD_CDE and N_MEMO side by side */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">F_ORD_CDE:</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">N_MEMO</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* PROC_APF and F_MEMO side by side */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">PROC_APF:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">F_MEMO</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* N_TD5 */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N_TD5</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_TD5</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* N_RESOL_IP */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N_RESOL_IP</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_RESOL_IP */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_RESOL_IP</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>


          {/* N_GR */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">N_GR</Label>
              <Input className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* F_GR */}
          <div className="border-b">
            <div className="p-2">
              <Label className="text-xs font-medium">F_GR</Label>
              <Input type="date" className="mt-1 h-8 text-xs" />
            </div>
          </div>

          {/* OBSERVACION */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">OBSERVACION</Label>
              <Textarea className="mt-1 min-h-[80px] text-xs" />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mt-4">
        <Button variant="secundario">Cancelar</Button>
        <Button>Guardar</Button>
      </div>
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </div>
  )
}

export default IngresoPeritosjudicialesForm
