import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"
export function IngresoPeritosTasadoresVcForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO PERITOS TASADORES VIALIDAD COMPLEMENTARIA</h2>
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
                  <SelectValue placeholder="02" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="02">02</SelectItem>
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
                  <SelectValue placeholder="RBPM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RBPM">RBPM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* OBRA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">OBRA</span>
            </div>
            <div className="p-2">
              <Input
                className="h-8 text-xs"
                defaultValue="REPOSICION Y HABILITACIÓN DE CAMINOS PARA VIALIDAD COMPLEMENTA"
              />
            </div>
          </div>

          {/* REGION */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">REGION</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="X" />
            </div>
          </div>

          {/* N° Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N° Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="407" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2005-06-15" />
            </div>
          </div>

          {/* M_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">M_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="170,148" />
            </div>
          </div>

          {/* Nº ORD.DV */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Nº ORD.DV</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* F.ORD.DV */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F.ORD.DV</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" />
            </div>
          </div>

          {/* RESOL */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RESOL</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="1156" />
            </div>
          </div>

          {/* Fecha de Resolución */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2004-07-28" />
            </div>
          </div>

          {/* Resolución Modificatoris */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Resolución Modificatoris</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="1310" />
            </div>
          </div>

          {/* Fecha de Resolución_MODIF */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución_MODIF</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2002-09-11" />
            </div>
          </div>

          {/* N_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="3156" />
            </div>
          </div>

          {/* F_TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2005-02-22" />
            </div>
          </div>

          {/* N_RESOL_IP */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_RESOL_IP</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="836" />
            </div>
          </div>

          {/* Fecha de Resolución_IP */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha de Resolución_IP</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2005-08-22" />
            </div>
          </div>

          {/* N_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">N_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="75026" />
            </div>
          </div>

          {/* F_GR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">F_GR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2005-09-21" />
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
