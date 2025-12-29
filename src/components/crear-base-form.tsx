import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

// Clases para inputs y textareas más notorios
const inputClass =
  "bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 shadow-sm placeholder:text-black transition"
const textareaClass =
  "bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200  shadow-sm placeholder:text-black transition"

export function CrearBaseForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Bloque 1: Datos del solicitante */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">Datos del solicitante</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fecha-sol-bbdd">Fecha de solicitud</Label>
              <Input id="fecha-sol-bbdd" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="solicitante-bbdd">Solicitante</Label>
              <Input id="solicitante-bbdd" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="correo-solicitante">Correo solicitante</Label>
              <Input id="correo-solicitante" type="email" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="area-solicitante">Área / Cargo</Label>
              <Input id="area-solicitante" className={inputClass} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bloque 2: Datos del proyecto y concesión */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">Datos del proyecto y concesión</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cod-proy">Código proyecto</Label>
              <Input id="cod-proy" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alias">Alias</Label>
              <Input id="alias" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom-proy">Nombre proyecto</Label>
              <Input id="nom-proy" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f-adjudic">Fecha Adjudicación</Label>
              <Input id="f-adjudic" type="date" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dec-adjudic">Decreto</Label>
              <Input id="dec-adjudic" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f-dec-adjudic">Fecha decreto adjudicación</Label>
              <Input id="f-dec-adjudic" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f-public-dec">Fecha publicación decreto</Label>
              <Input id="f-public-dec" type="date" className={inputClass} />
            </div>
          </div>
          {/* Convenio 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-pub-dec-conv-1">Fecha publicación decreto conv. 1</Label>
              <Input id="f-pub-dec-conv-1" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-conv-1">Observaciones convenio 1</Label>
              <Textarea id="obs-conv-1" className={textareaClass} />
            </div>
          </div>

          {/* Convenio 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-pub-dec-conv-2">Fecha publicación decreto conv. 2</Label>
              <Input id="f-pub-dec-conv-2" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-conv-2">Observaciones convenio 2</Label>
              <Textarea id="obs-conv-2" className={textareaClass} />
            </div>
          </div>

          {/* Convenio 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-pub-dec-conv-3">Fecha publicación decreto conv. 3</Label>
              <Input id="f-pub-dec-conv-3" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-conv-3">Observaciones convenio 3</Label>
              <Textarea id="obs-conv-3" className={textareaClass} />
            </div>
          </div>

          {/* Convenio 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-pub-dec-conv-4">Fecha publicación decreto conv. 4</Label>
              <Input id="f-pub-dec-conv-4" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-conv-4">Observaciones convenio 4</Label>
              <Textarea id="obs-conv-4" className={textareaClass} />
            </div>
          </div>

          {/* Convenio 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-pub-dec-conv-5">Fecha publicación decreto conv. 5</Label>
              <Input id="f-pub-dec-conv-5" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-conv-5">Observaciones convenio 5</Label>
              <Textarea id="obs-conv-5" className={textareaClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="space-y-2">
              <Label htmlFor="nom-sc">Nombre razón social</Label>
              <Input id="nom-sc" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="empresas-sc">Composición societaria</Label>
              <Input id="empresas-sc" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ord-dgop-expr">N° Orden DGOP Expropiaciones</Label>
              <Input id="ord-dgop-expr" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="f-ord-dgop-expr">Fecha válida</Label>
              <Input id="f-ord-dgop-expr" type="date" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs-gral">Observaciones generales</Label>
              <Textarea id="obs-gral" className={textareaClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom-if-const">Nombre IF Construcción</Label>
              <Input id="nom-if-const" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom-if-expl">Nombre IF Explotación</Label>
              <Input id="nom-if-expl" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom-enc-proy">Nombre Encargado proyecto</Label>
              <Input id="nom-enc-proy" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inicial-enc-proy">Iniciales Encargado proyecto</Label>
              <Input id="inicial-enc-proy" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono-enc-proy">Teléfono</Label>
              <Input id="telefono-enc-proy" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-enc-proy">Correo electrónico</Label>
              <Input id="email-enc-proy" type="email" className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="part-pres">Partida presupuestaria</Label>
              <Input id="part-pres" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bip">Código BIP</Label>
              <Input id="bip" className={inputClass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ifs-anteriores">Referencia IFs anteriores</Label>
              <Input id="ifs-anteriores" className={inputClass} />
            </div>
          </div>
        </CardContent>
      </Card>
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