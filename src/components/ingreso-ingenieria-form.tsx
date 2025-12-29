import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoIngenieriaForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO INGENIERÍA</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Primera fila: CODIGO NIVEL 1, CODIGO NIVEL 2 (pegado a la derecha) */}
          <div className="border-b">
            <div className="grid grid-cols-12">
              <div className="col-span-8"></div>
              <div className="col-span-2 bg-gray-50 p-2 border-r border-l">
                <Label className="text-xs font-medium">Código Nivel 1</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue placeholder="702" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="702">702</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 bg-gray-50 p-2">
                <Label className="text-xs font-medium">Código Nivel 2</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opción 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Segunda fila: ID_LOTE, ETAPA_LOTE, Con Acceso por Tribunales */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">ID_LOTE</Label>
                <Input placeholder="167CS02 1-02" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">ETAPA LOTE</Label>
                <Input placeholder="AVJ" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Con Acceso por Tribunales</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Tercera fila: LOTE, IMPUGNACION, F.COMP.PAGO */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">LOTE</Label>
                <Input placeholder="2" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">Impugnación</Label>
                <Input placeholder="No" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">F.Comp.Pago</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Cuarta fila: OBRA, ESTADO PLANO, RUT EXPROP */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">OBRA</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue placeholder="CS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">CS</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">Estado Plano</Label>
                <Input placeholder="D" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">FECHA TPM</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>

            </div>
          </div>

          {/* Quinta fila: LADO, ESTADO TASACION, ORIGEN */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">LADO</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue placeholder="I" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="i">I</SelectItem>
                    <SelectItem value="d">D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">Estado Tasación</Label>
                <Input placeholder="T" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Origen</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Sexta fila: KM INICIO, ESTADO LOTE, OTROS_EST */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Kilómetro Inicio</Label>
                <Input placeholder="235.329,90" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">Estado Lote</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue placeholder="VJ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vj">VJ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-2">
                <Label className="text-xs">Otros Estados</Label>
                <Select>
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opción 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Séptima fila: KM FINAL, ROL_SII, F.COMP.ENTREGA */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Kilómetro Fin</Label>
                <Input placeholder="235.403,50" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">Rol_SII</Label>
                <Input placeholder="57-1" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">F. Comp. Entrega</Label>
                <Input placeholder="29-12-2000" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Octava fila: FONO, PROP. SII */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">FONO</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Prop. SII</Label>
                <Input placeholder="MORAGA VERGARA ROSA" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Novena fila: FAX (e-mail), Prop. Aparente */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Correo electrónico</Label>
                <Input type="email" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Propietario CBR</Label>
                <Input placeholder="ROSA FLOR MORAGA VERGARA" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Décima fila: Sup. Terreno, Direc. P. Aparente */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Sup. Terreno</Label>
                <Input placeholder="212" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Direc. P. Aparente</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Decimaprimer fila: Sup. Edificada, Persona Contacto */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="p-2 border-r">
                <Label className="text-xs font-medium">Sup. Edificada</Label>
                <Input placeholder="0" className="mt-1 h-8 text-xs" />
              </div>
              <div className="col-span-2 p-2">
                <Label className="text-xs">Persona Contacto</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Decimasegunda fila: FOJAS, Numero, Año, Circunscrip. */}
          <div className="border-b">
            <div className="grid grid-cols-4">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">FOJAS</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">NUMERO</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">AÑO</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">CBR</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Observaciones */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Obs.ING</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Obs.Plano</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Obs.SB</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Notificación - Primera fila: NOTIFICACION, MONTO ANTIC., F. MONTO ANTIC. */}
          <div className="border-b">
            <div className="grid grid-cols-3">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">NOTIFICACION MONTO</Label>
                <Input placeholder="29-11-1999" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-r">
                <Label className="text-xs">MONTO ANTIC.</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">F. MONTO ANTIC.</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                {/* Espacio vacío */}
              </div>
            </div>
          </div>

          {/* Segunda fila: FECHA ACCESO, MEMO INF. ACCESO (a la derecha) */}
          <div>
            <div className="grid grid-cols-4">
              <div className="p-2">
                {/* Espacio vacío izquierda */}
              </div>
              <div className="p-2">
                {/* Espacio vacío izquierda */}
              </div>
              <div className="p-2 border-r border-l border-b">
                <Label className="text-xs">FECHA ACCESO VOLUNTARIO</Label>
                <Input type="date" placeholder="03-08-2000" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2 border-b">
                <Label className="text-xs">MEMO INF. ACCESO</Label>
                <Input placeholder="9602" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Tercera fila: RESPONSABLE, F. MEMO INF. ACCESO (a la derecha) */}
          <div>
            <div className="grid grid-cols-4">
              <div className="p-2">
                {/* Espacio vacío izquierda */}
              </div>
              <div className="p-2">
                {/* Espacio vacío izquierda */}
              </div>
              <div className="p-2 border-r border-l">
                <Label className="text-xs">RESPONSABLE</Label>
                <Input placeholder="VJ" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">F. MEMO INF. ACCESO</Label>
                <Input placeholder="10-08-2000" className="mt-1 h-8 text-xs" />
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