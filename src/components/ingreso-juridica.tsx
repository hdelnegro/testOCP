import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { Button } from "@/shared/components/ui/button"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog"

export function IngresoJuridicaForm() {
  const [existeDecreto, setExisteDecreto] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">INGRESO JURÍDICA</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Primera sección: ID_LOTE, LOTE, Etapa lote, F_Comp_Pago */}
          <div className="border-b">
            <div className="grid grid-cols-4">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">ID_LOTE</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="167AC07.4-01" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">LOTE</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="1" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Etapa Lote</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="JF" />
              </div>
              <div className="p-2">
                <Label className="text-xs font-medium">F_Comp_Pago</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Segunda sección: Estado lote, Propietario SII, ROL_SII */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Estado Lote</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="VJ" />
              </div>
              <div className="col-span-7 p-2 border-r">
                <Label className="text-xs font-medium">Propietario SII</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="GONZALEZ GONZALEZ MARIA INES" />
              </div>
              <div className="col-span-3 p-2">
                <Label className="text-xs font-medium">Rol_SII</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="537-53" />
              </div>
            </div>
          </div>

          {/* Tercera sección: F_NOTIF, Prop. Aparente */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">F_NOTIF.</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-01-04" />
              </div>
              <div className="col-span-10 p-2">
                <Label className="text-xs font-medium">Prop. Aparente</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="MARIA INES Y MARIA ALEJANDRA DAÑOBEITIA GONZALEZ" />
              </div>
            </div>
          </div>

          {/* Cuarta sección: Impugnacion, ORD. Fis.a Subs. */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Impugnación</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="No" />
              </div>
              <div className="col-span-2 p-2 border-r flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="existe-decreto"
                    checked={existeDecreto}
                    onCheckedChange={(checked) => setExisteDecreto(checked as boolean)}
                  />
                  <Label htmlFor="existe-decreto" className="text-xs font-medium cursor-pointer">
                    Existe Decreto Rectificatorio
                  </Label>
                </div>
              </div>
              {/* <div className="col-span-2 p-2 border-r flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primario" className="h-8 text-xs">Decretos</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Decretos</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm text-gray-600">Contenido de decretos aquí</div>
                  </DialogContent>
                </Dialog>
              </div> */}
              <div className="col-span-6 p-2">
                <Label className="text-xs font-medium">ORD. Fis.a Subs.</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="5502" />
              </div>
            </div>
          </div>

          {/* Quinta sección: Fojas Prop, Monto tasacion $, Fecha ordinario */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Fojas Prop.</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="1241 vta." />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Monto Tasación $</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="1,189,000" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Ordinario</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-03-17" />
              </div>
            </div>
          </div>

          {/* Sexta sección: Numero prop, Expediente, Decreto VJ */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Número Prop.</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="1681" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Expediente</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="90 VII" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Decreto VJ</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="956" />
              </div>
            </div>
          </div>

          {/* Séptima sección: Año prop, Resolución, Fecha decreto */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Año Prop.</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="1999" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Resolución</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="3136" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Decreto</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-03-30" />
              </div>
            </div>
          </div>

          {/* Octava sección: C.R.B Prop, Fecha resolución, Bienes nacionales */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">C.R.B. Prop.</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="Linares" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Resolución</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="1999-11-05" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Bienes Nacionales</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-04-06" />
              </div>
            </div>
          </div>

          {/* Novena sección: Decreto VC, Resolución Modif, Fecha contraloria */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Decreto VC</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Resolución Modif.</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Contraloria</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-04-12" />
              </div>
            </div>
          </div>

          {/* Décima sección: F_decreto VC, F. Resol. Modif., Fecha toma razon */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">F_Decreto VC</Label>
                <Input className="mt-1 h-8 text-xs" type="date" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">F. Resol. Modif.</Label>
                <Input className="mt-1 h-8 text-xs" type="date" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Toma Razón</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-04-14" />
              </div>
            </div>
          </div>

          {/* Décima primera sección: F_informe Pago, Ordinario fiscalia, Fecha publicacion */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">F_Informe Pago</Label>
                <Input className="mt-1 h-8 text-xs" type="date" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Ordinario Fiscalia</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="2336" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Publicación</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-05-15" />
              </div>
            </div>
          </div>

          {/* Décima segunda sección: Venc. consig, Fecha ordinario, Fecha rectificacion */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Venc. Consig</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-07-26" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Ordinario</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-03-06" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">Fecha Rectificación</Label>
                <Input className="mt-1 h-8 text-xs" type="date" />
              </div>
            </div>
          </div>

          {/* Décima tercera sección: Venc. Publicacion, Num Proceso, F. Calculo reajuste */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-2 p-2 border-r">
                <Label className="text-xs font-medium">Venc. Publicacion</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-07-19" />
              </div>
              <div className="col-span-5 p-2 border-r">
                <Label className="text-xs font-medium">Num Proceso</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-5 p-2">
                <Label className="text-xs font-medium">F.Calculo Reajuste</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-05-09" />
              </div>
            </div>
          </div>

          {/* Décima cuarta sección: Observaciones */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">Observaciones</Label>
              <Textarea
                className="mt-1 min-h-[60px] text-xs"
                defaultValue="Para eliminación llega rosol 276 de 19.12.24 y se modifica en la resol 5 de 9.1.25"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">DECRETO RECTIFICATORIO</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Primera sección: Ordinario fiscalia, Decreto VJ, Fecha rectificacion */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-4 p-2 border-r">
                <Label className="text-xs font-medium">Ordinario Fiscalia</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="7488" />
              </div>
              <div className="col-span-4 p-2 border-r">
                <Label className="text-xs font-medium">Decreto VJ</Label>
                <Input className="mt-1 h-8 text-xs" defaultValue="4015" />
              </div>
              <div className="col-span-4 p-2">
                <Label className="text-xs font-medium">Fecha Rectificación</Label>
                <Input className="mt-1 h-8 text-xs" type="date" />
              </div>
            </div>
          </div>

          {/* Segunda sección: Fecha ordinario, Fecha decreto, F. calculo reajuste */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-4 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Ordinario</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="1999-12-09" />
              </div>
              <div className="col-span-4 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Decreto</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="1999-12-30" />
              </div>
              <div className="col-span-4 p-2">
                <Label className="text-xs font-medium">F.Calculo Reajuste</Label>
                <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-03-07" />
              </div>
            </div>
          </div>

          {/* Tercera sección: Layout especial - 2 campos izquierda, 4 campos derecha apilados */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              {/* Columna izquierda - 2 filas */}
              <div className="col-span-4 border-r">
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">ORD. Fiscalia a Subsecretaria</Label>
                  <Input className="mt-1 h-8 text-xs" defaultValue="23760" />
                </div>
                <div className="p-2">
                  <Label className="text-xs font-medium">Fecha Ordinario</Label>
                  <Input className="mt-1 h-8 text-xs" type="date" defaultValue="1999-12-17" />
                </div>
              </div>

              {/* Columna derecha - 4 filas apiladas */}
              <div className="col-span-8">
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">Bienes Nacionales</Label>
                  <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-02-02" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">Fecha Contraloria</Label>
                  <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-02-09" />
                </div>
                <div className="p-2 border-b">
                  <Label className="text-xs font-medium">Fecha Toma Razón</Label>
                  <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-02-10" />
                </div>
                <div className="p-2">
                  <Label className="text-xs font-medium">Fecha Publicación</Label>
                  <Input className="mt-1 h-8 text-xs" type="date" defaultValue="2000-03-01" />
                </div>
              </div>
            </div>
          </div>

          {/* Cuarta sección: Observaciones */}
          <div>
            <div className="p-2">
              <Label className="text-xs font-medium">Observaciones</Label>
              <Textarea className="mt-1 min-h-[60px] text-xs" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-3">
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
