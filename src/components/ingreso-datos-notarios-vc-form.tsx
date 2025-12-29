import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoDatosNotariosVcForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }
  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-blue-600">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">INGRESO DE DATOS NOTARIOS VIALIDAD COMPLEMENTARIA</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* COD_NOT */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_NOT</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="01" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
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
                  <SelectValue placeholder="LVLS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LVLS">LVLS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CÓDIGO NIVEL 1 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">CÓDIGO NIVEL 1</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="MCHB" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MCHB">MCHB</SelectItem>
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
              <Input className="h-8 text-xs" defaultValue="06939" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2003-05-16" />
            </div>
          </div>

          {/* MONTO_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">MONTO_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="25,500" />
            </div>
          </div>

          {/* RETENCION */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RETENCION</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="sin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sin">sin</SelectItem>
                  <SelectItem value="con">con</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* LOTE */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">LOTE</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="2" />
            </div>
          </div>

          {/* Expediente */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Expediente</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* Nº OFICIO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Nº OFICIO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="804" />
            </div>
          </div>

          {/* N_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="10773" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2004-07-01" />
            </div>
          </div>

          {/* RESOL */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RESOL</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* Fecha de Resolución */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" />
            </div>
          </div>

          {/* N_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="60178" />
            </div>
          </div>

          {/* F_GR */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2004-09-10" />
            </div>
          </div>
        </CardContent>
      </Card>

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
