import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { ReclamoModal } from "./reclamos-modal"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoJudicialForm() {
  const [isReclamoModalOpen, setIsReclamoModalOpen] = useState(false)
  const [existeReclamo, setExisteReclamo] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Card className="border-l-4 border-l-primary-500">
          <CardHeader className="!p-0">
            <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
              <h2 className="text-sm font-bold uppercase text-white">INGRESO JUDICIAL</h2>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Primera sección: ID_LOTE, LOTE, Etapa Lote, F_Comp_Pago */}
            <div className="border-b">
              <div className="grid grid-cols-4">
                <div className="p-2 border-r">
                  <Label className="text-xs font-medium">ID_LOTE</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="167AC07.4-01" />
                </div>
                <div className="p-2 border-r">
                  <Label className="text-xs font-medium">LOTE</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="1" />
                </div>
                <div className="p-2 border-r">
                  <Label className="text-xs font-medium">ETAPA LOTE</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="JF" />
                </div>
                <div className="p-2">
                  <Label className="text-xs font-medium">Fecha Compromiso de Pago</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Segunda sección: Estado Lote, Propietario SII, ROL_SII */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r bg-gray-50">
                  <Label className="text-xs font-medium">Estado Lote</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue placeholder="VJ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vj">VJ</SelectItem>
                      <SelectItem value="vc">VC</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-7 p-2 border-r bg-gray-50">
                  <Label className="text-xs font-medium">Propietario SII</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="GONZALEZ GONZALEZ MARIA INES" />
                </div>
                <div className="col-span-3 p-2 bg-gray-50">
                  <Label className="text-xs font-medium">Rol_SII</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="537-53" />
                </div>
              </div>
            </div>

            {/* Tercera sección: Publicacion, ACCESO, Resp. Acceso, Fojas Prop. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Publicacion</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="5/15/2000" />
                </div>
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">ACCESO</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/28/2000" />
                </div>
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Resp. Acceso</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue placeholder="VJ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vj">VJ</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Fojas Prop.</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="1241 vta." />
                </div>
              </div>
            </div>

            {/* Cuarta sección: Prop. Aparente, Fono, Numero Prop. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-7 p-2 border-r">
                  <Label className="text-xs font-medium">Prop.Aparente</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="MARIA INES Y MARIA ALEJANDRA DAÑOBEITIA GONZAL" />
                </div>
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Fono</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2">
                  <Label className="text-xs font-medium">Número Prop.</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="1681" />
                </div>
              </div>
            </div>

            {/* Quinta sección: Direccion, Fax, Año Prop. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-7 p-2 border-r">
                  <Label className="text-xs font-medium">Dirección</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Fax</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2">
                  <Label className="text-xs font-medium">Año Prop.</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="1999" />
                </div>
              </div>
            </div>

            {/* Sexta sección: Existe Reclamo checkbox, Boton Reclamo, Circuns. Prop. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="existe-reclamo"
                      checked={existeReclamo}
                      onCheckedChange={(checked) => setExisteReclamo(checked as boolean)}
                    />
                    <Label htmlFor="existe-reclamo" className="text-xs font-medium cursor-pointer">
                      Existe Reclamo
                    </Label>
                  </div>
                </div>
                <div className="col-span-2 p-2 border-r flex items-center justify-center">
                  <Button
                    onClick={() => setIsReclamoModalOpen(true)}
                    className="h-8 text-xs bg-primary-500 hover:bg-primary-600"
                  >
                    RECLAMO
                  </Button>
                </div>
                <div className="col-span-8 p-2">
                  <Label className="text-xs font-medium">Circuns.Prop.</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="Linares" />
                </div>
              </div>
            </div>

            {/* Séptima sección: Impugnacion, Fecha Consignacion, Fecha Giro Cheque */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Impugnación</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="No" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha Consignación</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="5/24/2000" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Fecha Giro Cheque</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Octava sección: Decreto VJ, Publicacion Art.23, Monto Consignacion */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Decreto VJ</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="956" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Publicación Art.23</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="6/15/2000" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Monto Consignación</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="1,217,536" />
                </div>
              </div>
            </div>

            {/* Novena sección: F_Decreto VJ, Solicitud TPM, N.Ord. Ant.CDE */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">F_Decreto VJ</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="3/30/2000" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">F_Decreto_mod</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="3/30/2000" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">Resolución_decreto</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="3/30/2000" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">F_Resolución_modificatoria</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="3/30/2000" />
                </div>
              </div>
            </div>
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Resolución_modificatoria</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="3/30/2000" />
                </div>
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Solicitud TPM</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="6/29/2000" />
                </div>
                <div className="col-span-4 p-2">
                  <Label className="text-xs font-medium">N.Ord. Ant.CDE</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Décima sección: Decreto VC, Fecha Decreto TPM, F. Ord. Ant.CDE */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Decreto VC</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha Decreto TPM</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="6/30/2000" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">F. Ord. Ant.CDE</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Décima primera sección: F_Decreto VC, Fecha Notif. Frutos, Fojas Fisco */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">F_Decreto VC</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha Notif. Frutos</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="1/1/2001" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Fojas Fisco</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="3294" />
                </div>
              </div>
            </div>

            {/* Décima segunda sección: Venc. Art 9, Reclamacion Frutos, Numero Fisco */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Venc. Art.9</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="6/19/2000" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Reclamación Frutos</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Número Fisco</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="4036" />
                </div>
              </div>
            </div>

            {/* Décima tercera sección: Venc. 60 Dias, Fecha Oposicion, Año Fisco */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Venc. 60 Días</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/26/2000" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha Oposición</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Año Fisco</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="2004" />
                </div>
              </div>
            </div>

            {/* Décima cuarta sección: Venc. 20 Dias, Oficio FP, Circunscripcion Fisco */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Venc. 20 Días</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/11/2000" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Oficio FP</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="No" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">CBR Fisco</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="Linares" />
                </div>
              </div>
            </div>
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha Resolucion</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/11/2000" />
                </div>
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Resolucion</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="Nro" />
                </div>

              </div>
            </div>

            {/* Décima quinta sección: Venc. Frutos, Fecha TPM, Of. Envio Insc a Fisc. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Venc. Frutos</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/8/2000" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha TPM</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="7/28/2000" />
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">Of. envío Insc a Fisc.</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="(SI) 3064" />
                </div>
              </div>
            </div>

            {/* Décima sexta sección: Juzgado, Solic_Allanamiento, F. envio Insc a Fisc. */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r">
                  <Label className="text-xs font-medium">Juzgado</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="2° TAL" />
                </div>
                <div className="col-span-5 p-2 border-r">
                  <Label className="text-xs font-medium">Solic_Allanamiento</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="si">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-5 p-2">
                  <Label className="text-xs font-medium">F. envío Insc a Fisc.</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" placeholder="10/1/2009" />
                </div>
              </div>
            </div>

            {/* Décima séptima sección: Rol, F. Sol. Allanamiento */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Rol</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="No de expediente_AÑO, “0001_2005”" />
                </div>
                <div className="col-span-8 p-2">
                  <Label className="text-xs font-medium">F. Sol. Allanamiento</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Décima octava sección: Observaciones, Persona Contacto, Chk Doc */}
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-7 p-2 border-r">
                  <Label className="text-xs font-medium">Observaciones</Label>
                  <Textarea className="mt-1 min-h-[60px] text-xs" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">Persona Contacto</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-2 p-2">
                  <Label className="text-xs font-medium">Chk Doc</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="J.I.V." />
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
      </div>

      {/* Reclamo Modal */}
      <ReclamoModal open={isReclamoModalOpen} onOpenChange={setIsReclamoModalOpen} />

      {/* Confirmación Modal */}
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </>
  )
}
