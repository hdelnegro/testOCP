import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Textarea } from "@/shared/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"
import { useState } from "react"
import { Button } from "@/shared/components/ui/button"

export function IngresoReceptoresVcForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO RECEPTORES VIALIDAD COMPLEMENTARIA</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* COD_RECEP */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_RECEP</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="03-1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="03-1">03-1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* COD_PROY */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_PROY</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="CT" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CT">CT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CÓDIGO NIVEL 1 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">CÓDIGO NIVEL 1</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="CSSPP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSSPP">CSSPP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* N° Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">N° Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="37" />
            </div>
          </div>

          {/* Fecha Boleta */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Boleta</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2007-01-30" />
            </div>
          </div>

          {/* MONTO_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">MONTO_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="240,000" />
            </div>
          </div>

          {/* DECRETO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">DECRETO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* OBSERVACION D.J */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-start pt-3">
              <span className="text-xs font-medium">OBSERVACION D.J</span>
            </div>
            <div className="p-2">
              <Textarea className="min-h-[60px] text-xs" />
            </div>
          </div>

          {/* Nº TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Nº TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="9818" />
            </div>
          </div>

          {/* Fecha TD5 */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha TD5</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2007-01-25" />
            </div>
          </div>

          {/* Nº Resol */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Nº Resol</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="209" />
            </div>
          </div>

          {/* Fecha Resol */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Resol</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2007-04-23" />
            </div>
          </div>

          {/* Nº GDR */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Nº GDR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="53343" />
            </div>
          </div>

          {/* Fecha GDR */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className="border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha GDR</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" defaultValue="2007-05-07" />
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
