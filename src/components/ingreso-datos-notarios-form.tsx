import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Button } from "@/shared/components/ui/button"
import { useState } from "react"
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal"

export function DatosNotariosForm() {
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
            <h2 className="text-sm font-bold uppercase text-white">INGRESO DE DATOS NOTARIOS</h2>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* COD_NOTARIO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">COD_NOTARIO</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="01" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* NOMB_NOTARIO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">NOMB_NOTARIO</span>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Alejandro Ramiro Sepulveda Valenzuela" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alejandro">Alejandro Ramiro Sepulveda Valenzuela</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* RUT */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RUT</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="4.989.169-5" />
            </div>
          </div>

          {/* CIUDAD_BOLETA */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">CIUDAD_BOLETA</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="San Felipe" />
            </div>
          </div>

          {/* CUIDAD_DE_PAGO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">CUIDAD_DE_PAGO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="Santiago" />
            </div>
          </div>

          {/* TIPO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">TIPO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="Notario" />
            </div>
          </div>

          {/* FONO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">FONO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="512610121" />
            </div>
          </div>

          {/* FAX */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">FAX</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* DIRECCION */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">DIRECCION</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="Merced 188, San Felipe" />
            </div>
          </div>

          {/* PERS_CONT */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">PERS_CONT</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" defaultValue="Raquel Rivera (Contabilidad)" />
            </div>
          </div>

          {/* Fecha Poder Notarial Inicio */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Poder Notarial Inicio</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" />
            </div>
          </div>

          {/* Fecha Poder Notarial Término */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">Fecha Poder Notarial Término</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" type="date" />
            </div>
          </div>

          {/* RETIRA_CHEQUE */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RETIRA_CHEQUE</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* RUT */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">RUT</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* BANCO */}
          <div className="grid grid-cols-[200px_1fr] border-b">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">BANCO</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>

          {/* C_CORRIENTE */}
          <div className="grid grid-cols-[200px_1fr]">
            <div className=" border-r p-2 flex items-center">
              <span className="text-xs font-medium">C_CORRIENTE</span>
            </div>
            <div className="p-2">
              <Input className="h-8 text-xs" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="secundario" size="sm">
          Cancelar
        </Button>
        <Button size="sm" onClick={() => setIsConfirmModalOpen(true)}>Guardar</Button>
      </div>
      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />
    </div>
  )
}
