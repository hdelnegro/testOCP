import { Button } from "@/shared/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { ScrollArea } from "@/shared/components/ui/scroll-area"

interface ReclamoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReclamoModal({ open, onOpenChange }: ReclamoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-5xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-center text-sm font-bold uppercase">FORMULARIO DE RECLAMO</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-0 border rounded-lg">
            {/* Primera sección: Ident. Lote + Sent. 1 Instancia / Ident. Reclamo (IDD) debajo */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                {/* Columna izquierda: Ident. Lote e Ident. Reclamo (IDD) */}
                <div className="divide-y">
                  {/* Ident. Lote */}
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-2">
                      <Label className="text-xs font-medium">Ident. Lote</Label>
                    </div>
                    <div className="p-2">
                      <Input className="h-7 text-xs" placeholder="167AC07.4-01" />
                    </div>
                  </div>
                  {/* Ident. Reclamo (IDD) */}
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-2">
                      <Label className="text-xs font-medium">Ident. Reclamo (IDD)</Label>
                    </div>
                    <div className="p-2">
                      <Input className="h-7 text-xs" placeholder="136" />
                    </div>
                  </div>
                </div>
                {/* Columna derecha: Sent. 1 Instancia */}
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Sent. 1 Instancia</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda sección: Codigo Encargado, Fecha Sent. 1 Inst. */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Codigo Encargado</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Fecha Sent. 1 Inst.</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tercera sección: Estado Reclamo, Indem.Def 1 Inst. ($) */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Estado Reclamo</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="En Tramite" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Indem.Def. 1 Inst.($)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cuarta sección: Tipo Reclamo, Sent. 2 Instancia */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Tipo Reclamo</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="ART 12 Expediente" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Sent. 2 Instancia</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quinta sección: Reclamante, Fecha Sent 2 Inst */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Reclamante</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="Maria Ines González González" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Fecha Sent 2 Inst.</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sexta sección: Demandado + Rol Contencioso debajo / Indem. Def. 2 Inst.($) */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                {/* Columna izquierda: Demandado y Rol Contencioso */}
                <div className="divide-y">
                  {/* Demandado */}
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-2">
                      <Label className="text-xs font-medium">Demandado</Label>
                    </div>
                    <div className="p-2">
                      <Input className="h-7 text-xs" />
                    </div>
                  </div>
                  {/* Rol Contencioso */}
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-2">
                      <Label className="text-xs font-medium">Rol Contencioso</Label>
                    </div>
                    <div className="p-2">
                      <Input className="h-7 text-xs" placeholder="302-2000" />
                    </div>
                  </div>
                </div>
                {/* Columna derecha: Indem.Def. 2 Inst.($) */}
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Indem.Def. 2 Inst.($)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Séptima sección: Fecha Recepción, Sent. Casación */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Fecha Recepción</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Sent. Casación</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Octava sección: Juzgado Contencioso, Fecha Sent. Casación */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Juzgado Contencioso</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="2º Juzgado de Letras de Talca" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Fecha Sent. Casación</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Novena sección: Corte Apelación, Nº Decreto Pago/Exp */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Corte Apelación</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="Talca" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Nº Decreto Pago/Exp</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima sección: Fecha Venc. Evac. Inf, F. Decreto Pago/Exp */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Fecha Venc. Evac. Inf</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">F. Decreto Pago/Exp</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima primera sección: Monto Tasado ($), Nº Guía Remisión */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Monto Tasado ($)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="1,189,000" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Nº Guía Remisión</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima segunda sección: Monto Tasado (UF), F. Guía Remisión */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Monto Tasado (UF)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="79.12" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">F. Guía Remisión</Label>
                  </div>
                  <div className="p-2">
                    <Input type="date" className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima tercera sección: Monto Reclamo ($), Saldo a Pagar($) */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Monto Reclamo ($)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" placeholder="1" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Saldo a Pagar($)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima cuarta sección: Sup. Reclamada, Saldo a Pagar(UF) */}
            <div className="border-b">
              <div className="grid grid-cols-2 divide-x">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Sup. Reclamada</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-2">
                    <Label className="text-xs font-medium">Saldo a Pagar(UF)</Label>
                  </div>
                  <div className="p-2">
                    <Input className="h-7 text-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Décima quinta sección: Observaciones */}
            <div>
              <div className="grid grid-cols-12 divide-x">
                <div className="col-span-2 p-2">
                  <Label className="text-xs font-medium">Observaciones</Label>
                </div>
                <div className="col-span-10 p-2">
                  <Textarea
                    className="min-h-[80px] text-xs"
                    placeholder="Procur. no pide informe. Por Ord. N° 111, de 09/02/2001 Procuraduría remite boleta para pago peritaje judicial evacuado el 05/01/2001 por $1.346.500. Por Memo 100 de 24/04/2001 se remite a DEF TD:5 2317-2001 pago peritaje."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-4">
            <Button variant="secundario" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button onClick={() => onOpenChange(false)}>Guardar Reclamo</Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
