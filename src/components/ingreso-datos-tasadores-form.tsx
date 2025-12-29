import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoDatosTasadoresForm() {

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleGuardar = () => {
    setIsConfirmModalOpen(false)
    // Aquí iría la lógica para guardar el formulario
    console.log("Formulario guardado")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">INGRESO DATOS TASADORES</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit}>
            {/* Sección 1: Identificación Personal */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-3 p-2 border-r ">
                  <Label className="text-xs font-medium">ID_ruttas</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2 border-r ">
                  <Label className="text-xs font-medium">RUT</Label>
                  <Input className="h-8 text-xs" placeholder="12.345.678-9" />
                </div>
                <div className="col-span-3 p-2 border-r ">
                  <Label className="text-xs font-medium">Paterno</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2 ">
                  <Label className="text-xs font-medium">Materno</Label>
                  <Input className="h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 2: Nombres y Región */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r ">
                  <Label className="text-xs font-medium">Nombres</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Región *</Label>
                  <Select>
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue placeholder="Seleccione región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="I">I - Tarapacá</SelectItem>
                      <SelectItem value="II">II - Antofagasta</SelectItem>
                      <SelectItem value="III">III - Atacama</SelectItem>
                      <SelectItem value="IV">IV - Coquimbo</SelectItem>
                      <SelectItem value="V">V - Valparaíso</SelectItem>
                      <SelectItem value="VI">VI - O'Higgins</SelectItem>
                      <SelectItem value="VII">VII - Maule</SelectItem>
                      <SelectItem value="VIII">VIII - Biobío</SelectItem>
                      <SelectItem value="IX">IX - Araucanía</SelectItem>
                      <SelectItem value="X">X - Los Lagos</SelectItem>
                      <SelectItem value="XI">XI - Aysén</SelectItem>
                      <SelectItem value="XII">XII - Magallanes</SelectItem>
                      <SelectItem value="RM">RM - Metropolitana</SelectItem>
                      <SelectItem value="XIV">XIV - Los Ríos</SelectItem>
                      <SelectItem value="XV">XV - Arica y Parinacota</SelectItem>
                      <SelectItem value="XVI">XVI - Ñuble</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Sección 3: Decreto */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Nº Decreto</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Fecha Decreto</Label>
                  <Input className="h-8 text-xs" type="date" />
                </div>
              </div>
            </div>

            {/* Sección 4: Profesión y Verificación */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Profesión</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Verif</Label>
                  <Input className="h-8 text-xs" />
                </div>
                <div className="col-span-4 p-2">
                  <Label className="text-xs font-medium">Artículo</Label>
                  <Input className="h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 5: Responsable y Fecha Actual */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Responsable actual</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Fecha actual</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 6: Dirección y Comuna */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-8 p-2 border-r">
                  <Label className="text-xs font-medium">Dirección</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-4 p-2">
                  <Label className="text-xs font-medium">Comuna</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 7: Teléfonos */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">Fono Casa</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">Fono Ofic</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2 border-r">
                  <Label className="text-xs font-medium">Fax</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-3 p-2">
                  <Label className="text-xs font-medium">Celular</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 8: Email */}
            <div className="border-b">
              <div className="p-2">
                <Label className="text-xs font-medium">E-Mail</Label>
                <Input type="email" className="mt-1 h-8 text-xs" />
              </div>
            </div>

            {/* Sección 9: Perito Judicial y Fechas */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Perit Jud</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-4 p-2 border-r">
                  <Label className="text-xs font-medium">Fecha D Of</Label>
                  <Input type="date" className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-4 p-2">
                  <Label className="text-xs font-medium">Cort Apelac</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 10: Fecha Nacimiento */}
            <div className="border-b">
              <div className="p-2">
                <Label className="text-xs font-medium">Fecha Nac</Label>
                <Input type="date" className="mt-1 h-8 text-xs" />
              </div>
            </div>

            {/* Sección 11: Cursos */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Curso Exp</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Otros Cursos</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 12: Trabajo Actual y Calificación */}
            <div className="border-b">
              <div className="grid grid-cols-12">
                <div className="col-span-6 p-2 border-r">
                  <Label className="text-xs font-medium">Trabajo Actual</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
                <div className="col-span-6 p-2">
                  <Label className="text-xs font-medium">Calificación</Label>
                  <Input className="mt-1 h-8 text-xs" />
                </div>
              </div>
            </div>

            {/* Sección 13: Observaciones */}
            <div className="border-b">
              <div className="p-2">
                <Label className="text-xs font-medium">Obs_Tasadores *</Label>
                <Textarea className="mt-1 min-h-[80px] text-xs" />
              </div>
            </div>

            {/* Sección 14: D_Vialidad */}
            <div className="border-b">
              <div className="p-2">
                <Label className="text-xs font-medium">D_Vialidad</Label>
                <Input className="mt-1 h-8 text-xs" />
              </div>
            </div>

            {/* Sección 15: Curriculum */}
            <div className="border-b">
              <div className="p-2">
                <Label className="text-xs font-medium">Curriculum</Label>
                <Textarea className="mt-1 min-h-[100px] text-xs" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 p-4">
              <Button type="button" variant="secundario">
                Cancelar
              </Button>
              <Button type="submit" onClick={() => setIsConfirmModalOpen(true)}>Guardar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </div>
  )
}

export default IngresoDatosTasadoresForm
