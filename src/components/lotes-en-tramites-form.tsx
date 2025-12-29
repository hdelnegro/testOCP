import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Printer } from "lucide-react"
import { useState } from "react"

export function LotesEnTramitesForm() {
  const [formData, setFormData] = useState({
    codigoNivel1: "",
    codigoNivel2: "",
    estadoLote: "",
    cantidadLotes: "",
    montosSuperficie: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLimpiar = () => {
    setFormData({
      codigoNivel1: "",
      codigoNivel2: "",
      estadoLote: "",
      cantidadLotes: "",
      montosSuperficie: "",
    })
  }

  const handleImprimir = () => {
    window.print()
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-md font-bold uppercase text-white">INFORME EJECUTIVO</h2>
            <h3 className="text-sm font-bold uppercase text-white">Lotes en Tramites</h3>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          {/* Controles superiores */}
          <div className="flex items-start justify-between mb-6 gap-4">
            <div className="flex items-center gap-2">

            </div>
            <span className="text-sm font-medium">Total Base</span>

            <div className="flex-1 flex gap-4 max-w-2xl">
              <div className="flex-1">
                <Label htmlFor="codigoNivel1" className="text-xs">
                  Código Nivel 1
                </Label>
                <Select
                  value={formData.codigoNivel1}
                  onValueChange={(value) => handleInputChange("codigoNivel1", value)}
                >
                  <SelectTrigger id="codigoNivel1">
                    <SelectValue placeholder="Seleccione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nivel1">Nivel 1</SelectItem>
                    <SelectItem value="nivel2">Nivel 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Label htmlFor="codigoNivel2" className="text-xs">
                  Código Nivel 2
                </Label>
                <Select
                  value={formData.codigoNivel2}
                  onValueChange={(value) => handleInputChange("codigoNivel2", value)}
                >
                  <SelectTrigger id="codigoNivel2">
                    <SelectValue placeholder="Seleccione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="codigo1">Código 1</SelectItem>
                    <SelectItem value="codigo2">Código 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
              >
                Cargar Datos
              </Button>
              <Button
                variant="secundario"
                size="sm"
                onClick={handleLimpiar}
              >
                Limpiar
              </Button>
              <Button
                variant="secundario"
                size="sm"
                onClick={handleImprimir}
                className="gap-2"
              >
                <Printer className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tabla de datos */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-600 text-primary-foreground">
                  <th className="p-2 text-center font-semibold border-b">Estado Lote</th>
                  <th className="p-2 text-center font-semibold border-b border-l">Cantidad de Lotes</th>
                  <th className="p-2 text-center font-semibold border-b border-l">Montos o Superficie</th>
                </tr>
              </thead>
              <tbody>
                {/* SECCIÓN 1: LOTES EN TRAMITE DE ExpedienteROPIACIONES (Sin agrupación) */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    LOTES EN TRAMITE DE ExpedienteROPIACIONES (No incluye SB, F y O)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className=" pl-6 ">
                    <Label className=" font-medium">LOTES EN ESTADO "F"</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-medium">LOTES EN STAND BY</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-medium">LOTES EN OTROS ESTADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                {/* SECCIÓN 2: LOTES EN TRAMITE ExpedienteROPIATORIO - Título Principal */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    LOTES EN TRAMITE ExpedienteROPIATORIO (No incluye SB,F y O)
                  </td>
                </tr>

                {/* Items sin subsección */}
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-medium">LOTES CON PLANOS DEFINITIVOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">LOTES TASADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">LOTES NOTIFICADOS A LOS PROPIETARIOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                {/* Subsección: TOTALES */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    TOTALES</td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Enviados a Fiscalía para Decreto</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Decretados</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Publicados</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Consignados o Pagados</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                {/* Subsección: JUDICIAL */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    JUDICIAL
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Enviados a Fiscalía para Decreto VJ</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Decretados VJ</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Publicados VJ</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Consignados VJ</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes con TPM Efectuada</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>

                {/* Subsección: OTROS */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    OTROS
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Pagados con Convenio Complementario</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Pagados con Patrimonio Afect. Fiscal</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Pagados en Enajenación por Compensación</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>

                {/* Subsección: CONVENIO */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    CONVENIO
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Enviados a Fiscalía para Decreto VC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Decretados VC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Publicados VC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Pagados VC</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>

                {/* Subsección: SUMA LOTES INSCRITOS A FAVOR DEL FISCO */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    SUMA LOTES INSCRITOS A FAVOR DEL FISCO
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Inscritos a Favor del Fisco VJ</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Inscritos a Favor del Fisco VC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Inscritos a Favor del Fisco CC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Lotes Insc. Fisco por sentencia Jud.</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>

                {/* SECCIÓN 3: CANTIDAD DE LOTES CON RECLAMO (Título con input) */}
                <tr className="border-b">
                  <td className="p-3 text-primary border-b bg-muted/50">
                    <Label className="font-bold">CANTIDAD DE LOTES CON RECLAMO para cada nivel</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                {/* Subsección: TOTAL RECLAMOS */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    TOTAL RECLAMOS (No cuenta Lotes, solo reclamos al total Base)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 12 Expropiados</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 12 Fisco</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 20</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-medium">Reclamos Art 9A</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className=" text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 9B</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 9C</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Reclamos Art 9D</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Nulidad</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Recursos de Protección</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-medium">Otros</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>

                </tr>

                {/* SECCIÓN 4: TOTAL RECLAMOS TERMINADOS (Título con input) */}
                <tr className="border-b">
                  <td className="p-3 text-primary border-b bg-muted/50">
                    <Label className="font-bold">TOTAL RECLAMOS TERMINADOS CON SENTENCIA</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                {/* SECCIÓN 5: TOTAL RECLAMOS EN PROCESO (Título con input) */}
                <tr className="">
                  <td className="p-3 text-primary  bg-muted/50">
                    <Label className="font-bold">TOTAL RECLAMOS EN PROCESO</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

