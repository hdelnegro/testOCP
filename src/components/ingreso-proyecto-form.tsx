import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { TagInput } from "@/shared/components/ui/tag-input"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function IngresoProyectoForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [empresas, setEmpresas] = useState<string[]>([])

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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO PROYECTO</h2>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Primera fila: Código Proyecto (campo único) */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2">
                <Label className="text-xs font-medium">Código Proyecto</Label>
                <Input placeholder="16" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Segunda fila: ALIAS, Decreto Adjudic. */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">ALIAS</Label>
                <Input placeholder="Talca - Chillán 16" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Decreto Adjudic.</Label>
                <Input placeholder="21" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Tercera fila: Nombre (BALI), Fecha Decreto */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Nombre (BALI)</Label>
                <Input placeholder="CONCESION INTERNACIONAL RUTA 5 TRAMO :TALCA - CHILLAN" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Fecha Decreto</Label>
                <Input type="date" defaultValue="1996-01-12" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Cuarta fila: Fecha Adjudic., Fecha Public. Dec. */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Adjudic.</Label>
                <Input type="date" defaultValue="1996-01-04" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Fecha Public. Dec.</Label>
                <Input type="date" defaultValue="1996-03-13" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Cuarta fila: Fecha Public. Conv.1, Observ. Conv.1 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Public. Conv.1</Label>
                <Input type="date" defaultValue="1998-08-11" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Observ. Conv.1</Label>
                <Input placeholder="Decreto N° 675 de 29-05-1998, Convenio de 08-05-1998" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Quinta fila: Fecha Public. Conv.2, Observ. Conv.2 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Public. Conv.2</Label>
                <Input type="date" defaultValue="1998-11-28" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Observ. Conv.2</Label>
                <Input placeholder="Decreto N° 1969 de 23-10-1998, Convenio de 06-10-1998" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Sexta fila: Fecha Public. Conv.3, Observ. Conv.3 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Public. Conv.3</Label>
                <Input type="date" defaultValue="2001-01-29" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Observ. Conv.3</Label>
                <Input placeholder="Decreto N° 5073 de 21-11-2000, Convenio de 03-10-2000" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Séptima fila: Fecha Public. Conv.4, Observ. Conv.4 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Public. Conv.4</Label>
                <Input type="date" defaultValue="2001-12-22" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Observ. Conv.4</Label>
                <Input placeholder="Decreto N° 1511 de 12-10-2001, Convenio de 10-10-2001" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Octava fila: Fecha Public. Conv.5, Observ. Conv.5 */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Fecha Public. Conv.5</Label>
                <Input type="date" defaultValue="2004-08-24" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Observ. Conv.5</Label>
                <Input placeholder="Decreto N° 602 de 16-07-2004, Convenio de 19-12-03" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Novena fila: Nombre Soc. Conc. */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2">
                <Label className="text-xs font-medium">Nombre Soc. Conc.</Label>
                <Input placeholder="Talca Chillán Sociedad Concesionaria S. A" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Décima fila: Empresas Soc. Conc. */}
          <div className="border-b">
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2">
                <Label className="text-xs font-medium">Empresas Soc. Conc.</Label>
                <TagInput
                  value={empresas}
                  onChange={setEmpresas}
                  placeholder="Escribe el nombre de una empresa y presiona Enter"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Decimaprimer fila: N° Ord. DGOP, Fecha Ord. DGOP */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">N° Ord. DGOP</Label>
                <Input placeholder="385" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Fecha Ord. DGOP</Label>
                <Input type="date" defaultValue="2000-05-02" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Decimasegunda fila: Asignación, Sub Asignación */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Asignación</Label>
                <Input placeholder="03 01 31 02 003" className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Sub Asignación</Label>
                <Input placeholder="29000245-0" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Decimatercer fila: Observ. Grales. */}
          <div >
            <div className="grid grid-cols-1">
              <div className="bg-gray-50 p-2 border-b">
                <Label className="text-xs font-medium">Observ. Grales.</Label>
              </div>
              <div className="p-2">
                <Textarea className="min-h-[80px] text-xs" />
              </div>
            </div>
          </div>

          {/* Decimacuarta fila: Inspección fiscal */}
          <div className="border-b bg-blue-50/30 mt-4">
            {/* Título principal de la sección */}
            <div className="bg-blue-100 border-b text-center border-blue-200 p-3">
              <Label className="text-sm uppercase font-semibold text-primary-500">Inspección Fiscal</Label>
            </div>

            {/* Inspector de construcción */}
            <div className="p-4 border-b border-blue-100">
              <div className="mb-3 pb-2 border-b border-blue-200/50">
                <Label className="text-sm font-semibold text-primary-500">Inspector de Construcción</Label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Nombre</Label>
                  <Input placeholder="Ingrese nombre" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Nº Resolución</Label>
                  <Input placeholder="Nº resolución" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Fecha Resolución</Label>
                  <Input type="date" defaultValue="2000-05-02" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Adjunto Designación</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="Adjunto Designación" />
                </div>
              </div>
            </div>

            {/* Inspector de explotación */}
            <div className="p-4">
              <div className="mb-3 pb-2 border-b border-blue-200/50">
                <Label className="text-sm font-semibold text-primary-500">Inspector de Explotación</Label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Nombre</Label>
                  <Input placeholder="Ingrese nombre" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Nº Resolución</Label>
                  <Input placeholder="Nº resolución" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Fecha Resolución</Label>
                  <Input type="date" defaultValue="2000-05-02" className="mt-1 h-8 text-xs" />
                </div>
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Label className="text-xs font-medium text-gray-700">Adjunto Designación</Label>
                  <Input className="mt-1 h-8 text-xs" placeholder="Adjunto Designación" />
                </div>
              </div>
            </div>
          </div>

          {/* Decimasexta fila: Nom. Encargado UTE, Iniciales Encarg. DE */}
          <div className="border-b">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 p-2 border-r">
                <Label className="text-xs font-medium">Nom. Encargado DE</Label>
                <Input placeholder="Jaime Rosales F." className="mt-1 h-8 text-xs" />
              </div>
              <div className="p-2">
                <Label className="text-xs">Iniciales Encarg. DE</Label>
                <Input placeholder="JRF" className="mt-1 h-8 text-xs" />
              </div>
            </div>
          </div>

          {/* Decimaséptima fila: Telefono Encarg. DE */}
          <div>
            <div className="grid grid-cols-1">
              <div className="p-2">
                <Label className="text-xs font-medium">Telefono Encarg. DE</Label>
                <Input placeholder="2449 6925" className="mt-1 h-8 text-xs" />
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