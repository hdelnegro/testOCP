import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function EstudioLotesForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">Estudio Lotes Stand By</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Primera fila: Headers principales */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">ID_LOTE</Label>
              </div>
              <div className="col-span-2 bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">CÓDIGO NIVEL 1</Label>
              </div>
              <div className="col-span-2 bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">CÓDIGO NIVEL 2</Label>
              </div>
              <div className="col-span-6 bg-gray-50 p-2">
                <Label className="text-xs font-medium">LOTE</Label>
              </div>
            </div>
          </div>

          {/* Segunda fila: Datos principales */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Input placeholder="16SCS00003" className="h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Input className="h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Input className="h-8 text-xs" />
              </div>
              <div className="col-span-6 p-2">
                <Input placeholder="3" className="h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Tercera fila: ETAPA_LOTE, ROL SII, COMUNA, F_ING_PD */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 bg-gray-50 p-2 border-r">
                <Label className="text-xs">ETAPA LOTE</Label>
                <Input placeholder="SB" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">ROL SII</Label>
                <Input placeholder="1322-39" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">COMUNA</Label>
                <Input placeholder="San Carlos" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">Fecha Ingreso Plano Definitivo</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">Superficie de Terreno</Label>
                <Input placeholder="3752" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Superficie Edificada</Label>
                <Input placeholder="0" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Cuarta fila: RESOL */}
          <div className="border-b">
            <div className="grid grid-cols-8">
              <div className="col-span-2 bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Resolución Nombramiento Peritos</Label>
                <Input placeholder="38" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">Fecha de Resolución</Label>
                <Input type="date" placeholder="07-03-2025" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs">Resolución Modificatoris</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Fecha Resolución Modificatoria</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Filas DEC_VC y DEC_VJ con TD5PE centrado */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              {/* Columna izquierda: DEC_VC y DEC_VJ */}
              <div className="col-span-7">
                {/* Fila DEC_VC */}
                <div className="grid grid-cols-7 border-b">
                  <div className="col-span-1 bg-gray-50 p-2 border-r">
                    <Label className="text-xs font-medium">Decreto VC</Label>
                    <Input className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Decreto VC</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Publicación Decreto VC</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Guía Remisión VC</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                </div>
                {/* Fila DEC_VJ */}
                <div className="grid grid-cols-7">
                  <div className="col-span-1 bg-gray-50 p-2 border-r">
                    <Label className="text-xs font-medium">Decreto VJ</Label>
                    <Input className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Decreto VJ</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Publicación VJ</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Consignación</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                </div>
              </div>

              {/* Columna derecha: TD5PE centrado verticalmente */}
              <div className="col-span-5 flex items-center">
                <div className="grid grid-cols-3 w-full">
                  <div className="col-span-1 bg-gray-50 p-2 border-r border-t border-b">
                    <Label className="text-xs">TD5</Label>
                    <Input className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-1 p-2 border-r border-t border-b">
                    <Label className="text-xs">Fecha TD5</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-1 bg-gray-50 p-2 border-t border-b">
                    <Label className="text-xs">Código Comisión</Label>
                    <Input placeholder="16XVI71" className="mt-1 h-8 text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Séptima fila: JUZGADO con AÑO_FISCO separado */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              {/* Columna izquierda: JUZGADO y campos relacionados */}
              <div className="col-span-9">
                <div className="grid grid-cols-9">
                  <div className="col-span-1 bg-gray-50 p-2 border-r">
                    <Label className="text-xs font-medium">JUZGADO</Label>
                    <Input className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-1 p-2 border-r">
                    <Label className="text-xs">ROL</Label>
                    <Input className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Vencimiento 20 días</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Compromiso de Pago</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                  <div className="col-span-2 p-2 border-r">
                    <Label className="text-xs">Fecha Compromiso de Entrega</Label>
                    <Input type="date" className="mt-1 h-8 text-xs" />
                  </div>
                </div>
              </div>

              {/* Columna derecha: AÑO_FISCO */}
              <div className="col-span-3 flex items-center">
                <div className="w-full">
                  <div className="bg-gray-50 p-2 border-l border-r">
                    <Label className="text-xs">Año Fisco</Label>
                    <Input placeholder="29-06-2026" className="mt-1 h-8 text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Octava fila: OBS_LOTE */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Observación Lote</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Novena fila: OBS_TAS */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Observación Tasación</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Décima fila: OBS_VC */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Observación Convenio</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Undécima fila: OBS_JURID */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Observación Legal</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Duodécima fila: OBS_SB */}
          <div>
            <div className="bg-gray-50 p-2 border-b">
              <Label className="text-xs font-medium">Observación SB</Label>
            </div>
            <div className="p-2">
              <Textarea
                className="min-h-[80px] text-xs"
                placeholder="El SB aplica por cuanto se superpone con área de expropiación anterior IDLOTE: 9B52CV030006"
              />
            </div>
          </div>

          <div className="mt-2">
            {/* Título principal de la sección */}
            {/* <div className="bg-blue-100 border-b text-center border-blue-200 p-3">
              <Label className="text-sm uppercase font-semibold text-primary-500">Información del solicitante</Label>
            </div> */}

            {/* Nombre */}
            <div >
              {/* <div className="mb-3 pb-2 border-b border-blue-200/50">
                <Label className="text-sm font-semibold text-primary-500">Nombre</Label>
              </div> */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Nombre del solicitante</Label>
                  <Input placeholder="Ingrese nombre" className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Fecha inicio stand by</Label>
                  <Input type="date" defaultValue="2000-05-02" className="mt-1 h-8 text-xs" />
                </div>
                <div className="p-2 rounded border-t border-r">
                  <Label className="text-xs font-medium text-gray-700">Adjunto</Label>
                  <Textarea
                    className="mt-1 h-8 text-xs"
                  />
                  {/* <Input type="input" className="mt-1 h-8 text-xs" /> */}
                </div>
              </div>
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