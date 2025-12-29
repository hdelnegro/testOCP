import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoPeritosTasadoresForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO PERITOS TASADORES</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* COD_P */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_P</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="17" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="17">17</SelectItem>
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
                  <SelectValue placeholder="VM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VM">VM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* N° Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N° Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="126" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2016-07-20" />
            </div>
          </div>

          {/* M_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">M_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="239801" />
            </div>
          </div>

          {/* RESOL A PAGAR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RESOL A PAGAR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="348" />
            </div>
          </div>

          {/* Fecha de Resolución A PAGAR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución A PAGAR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2016-06-06" />
            </div>
          </div>

          {/* RESOL_A_MODIF */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RESOL_A_MODIF</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* Fecha de Resolución_A_MODIF */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución_A_MODIF</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" />
            </div>
          </div>

          {/* N_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="1422" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2016-01-15" />
            </div>
          </div>

          {/* N_RESOL_IP */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_RESOL_IP</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="z" />
            </div>
          </div>

          {/* Fecha de Resolución_IP */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución_IP</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2016-08-09" />
            </div>
          </div>

          {/* N_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="81537" />
            </div>
          </div>

          {/* F_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2016-08-23" />
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
