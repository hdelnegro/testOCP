import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Button } from "@/shared/components/ui/button"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function PlanoNuevoForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">FORMULARIO INGRESO PLANO NUEVO</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Fecha Solicitud Row */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-9 border-r"></div>
              <div className="col-span-3 p-2">
                <Label className="text-xs font-medium">FECHA SOLICITUD:</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Primera fila: SOLICITANTE y ALIAS PROYECTO */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs font-medium">SOLICITANTE:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">ALIAS PROYECTO:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Segunda fila: COD_NIVEL 1 y Nombre Nivel 1 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="border-r p-2">
                <Label className="text-xs font-medium">COD_NIVEL 1:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Nombre Nivel 1:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Tercera fila: COD_NIVEL 2 y Nombre Nivel 2 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="border-r p-2">
                <Label className="text-xs font-medium">COD_NIVEL 2:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Nombre Nivel 2:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Cuarta fila: OBRA y ORIGEN */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="border-r p-2">
                <Label className="text-xs font-medium">OBRA:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">ORIGEN:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Quinta fila: ID LOTES */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs font-medium">ID LOTES:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Sexta fila: Cantidad total de lotes */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs">Cantidad total de lotes:</Label>
                <Input type="number" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Séptima fila: Fecha ingreso y Estado de plano */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="border-r p-2">
                <Label className="text-xs">Fecha ingreso plano nuevo:</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Estado de plano (R, C, A, D):</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="R">R</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Octava fila: VºBº ADMINISTRADOR BDD */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs font-medium">VºBº ADMINISTRADOR BDD para ID_Lotes:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Novena fila: ADJUNTO */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs font-medium">ADJUNTO:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Observaciones Section */}
          <div>
            <div className="bg-gray-50 p-2 border-b">
              <Label className="text-xs font-medium">OBSERVACIONES:</Label>
            </div>
            <div className="p-2">
              <Textarea className="min-h-[120px] text-xs" />
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
