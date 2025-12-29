import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Button } from "@/shared/components/ui/button"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoBoletasForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO DE BOLETAS (ANTIGUO)</h2>
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
                  <SelectValue placeholder="18-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-4">18-4</SelectItem>
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
                  <SelectValue placeholder="AVOII" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AVOII">AVOII</SelectItem>
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
              <Input className="h-8 text-xs" defaultValue="39416" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2022-11-28" />
            </div>
          </div>

          {/* MONTO_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">MONTO_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="80,000" />
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
                  <SelectValue placeholder="con" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="con">con</SelectItem>
                  <SelectItem value="sin">sin</SelectItem>
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
              <Input className="h-8 text-xs" defaultValue="48" />
            </div>
          </div>

          {/* Decreto VC / Decreto VJ Row */}
          <div className="grid grid-cols-2 border-b">
            <div className="grid grid-cols-[200px_1fr] border-r">
              <div className=" border-r p-2 flex items-center">
                <span className="text-xs font-medium">Decreto VC</span>
              </div>
              <div className="p-2">
                <Input className="h-8 text-xs" defaultValue="Res 3258" />
              </div>
            </div>
            <div className="grid grid-cols-[200px_1fr]">
              <div className=" border-r p-2 flex items-center">
                <span className="text-xs font-medium">Decreto VJ:</span>
              </div>
              <div className="p-2">
                <Input className="h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* F_Decreto VC / F_Decreto VJ Row */}
          <div className="grid grid-cols-2 border-b">
            <div className="grid grid-cols-[200px_1fr] border-r">
              <div className=" border-r p-2 flex items-center">
                <span className="text-xs font-medium">F_Decreto VC</span>
              </div>
              <div className="p-2">
                <Input className="h-8 text-xs" type="date" defaultValue="2022-10-12" />
              </div>
            </div>
            <div className="grid grid-cols-[200px_1fr]">
              <div className=" border-r p-2 flex items-center">
                <span className="text-xs font-medium">F_Decreto VJ:</span>
              </div>
              <div className="p-2">
                <Input className="h-8 text-xs" type="date" />
              </div>
            </div>
          </div>

          {/* N_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="6335" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2022-03-07" />
            </div>
          </div>

          {/* Resolución Nombramiento Peritos */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Resolución Nombramiento Peritos</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="3830" />
            </div>
          </div>

          {/* F_Resolución Nombramiento Peritos */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_Resolución Nombramiento Peritos</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2022-12-05" />
            </div>
          </div>

          {/* N_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="xxxx" />
            </div>
          </div>

          {/* F_GR */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="9999-09-09" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="secundario" size="sm">
          Cancelar
        </Button>
        <Button size="sm" onClick={() => setIsConfirmModalOpen(true)}>Guardar</Button>
      </div>
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </div>
  )
}
