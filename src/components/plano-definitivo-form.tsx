import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Button } from "@/shared/components/ui/button"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function PlanoDefinitivoForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">FORMULARIO DE INGRESO DE PLANO DEFINITIVO/ENVÍO A TASACIÓN</h2>
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

          {/* Datos del Solicitante */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="p-2 border-b">
                <Label className="text-xs font-medium">SOLICITANTE:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-b">
                <Label className="text-xs font-medium">ALIAS PROYECTO:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-b">
                <Label className="text-xs font-medium">COD_NIVEL 1:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">COD_NIVEL 2:</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Sección OBRA y ORIGEN */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              {/* OBRA Section */}
              <div className="border-r">
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">OBRA:</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs">Cantidad total de lotes:</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs">Fecha plano definitivo:</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2">
                  <Label className="text-xs">Solicita Comunicación N°1 (*):</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>

              {/* ORIGEN Section */}
              <div>
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">ORIGEN:</Label>
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs">Cantidad total de lotes a tasar:</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs">Estado de plano (D, A):</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="D">D</SelectItem>
                      <SelectItem value="A">A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-2">
                  <Label className="text-xs">Fecha Compromiso de Entrega Lotes por BALI:</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Sección Fichas Lote y Adjuntos */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              {/* Fichas Lote */}
              <div className="border-r flex items-center justify-center">
                <div className="p-2">
                  <Label className="text-xs font-medium">ADJUNTOS:</Label>
                </div>
              </div>

              {/* Adjuntos */}
              <div>
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">Fichas Lote:</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs">Plano Polyester:</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue placeholder="Si" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="si">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-2">
                  <Label className="text-xs">Otros:</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Observaciones Section */}
          <div className="border-b">
            <div className="p-2 border-b">
              <Label className="text-xs font-medium">OBSERVACIONES:</Label>
            </div>
            <div className="p-2">
              <Textarea className="min-h-[120px] text-xs" />
            </div>
          </div>

          {/* Footer Note */}
          <div className="p-3 text-xs text-gray-600 ">
            <p>(*) Siempre se debe realizar la Comunicación 1, a excepción de los siguientes casos:</p>
            <p className="ml-4">- En caso de Art. 9</p>
            <p className="ml-4">
              - En determinadas modificaciones de proyecto, lo cual deberá ser evaluado caso a caso por el Encargado de
              Proyecto.
            </p>
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
