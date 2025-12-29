import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"

export function LotesEnEstadosForm() {

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-md font-bold uppercase text-white">INFORME EJECUTIVO</h2>
            <h3 className="text-sm font-bold uppercase text-white">Lotes en otros estados</h3>
          </div>
        </CardHeader>
        <CardContent className="p-2">

          {/* Tabla de datos */}
          <div className="border rounded-lg overflow-hidden mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-600 text-primary-foreground">
                  <th className="p-2 text-center font-semibold border-b">Estado Lote</th>
                  <th className="p-2 text-center font-semibold border-b border-l">Cantidad de Lotes</th>
                  <th className="p-2 text-center font-semibold border-b border-l">Montos</th>
                </tr>
              </thead>
              <tbody>
                {/* SECCIÓN 1: LOTES EN TRAMITE DE ExpedienteROPIACIONES (Sin agrupación) */}
                <tr className="bg-muted/50">
                  <td colSpan={3} className="p-3 font-bold text-primary border-b">
                    LOTES ESTADO "F"
                  </td>
                </tr>
                <tr className="border-b">
                  <td className=" pl-6 ">
                    <Label className=" font-medium">LOTES FISCALES</Label>
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
                    <Label className=" font-medium">LOTES PATRIMONIO DE AFECTACION FISCAL</Label>
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
                    <Label className=" font-semibold">LOTES SIN ANTECEDENTES COMPLETOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
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
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES TASADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
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
                    LOTES ESTADO "SB"
                  </td>
                </tr>

                {/* Items sin subsección */}
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-medium">LOTES POR ELIMINARSE</Label>
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
                    <Label className=" font-medium">LOTES DETENIDOS POR SC</Label>
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
                    <Label className=" font-medium">LOTES DETENIDOS POR IF</Label>
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
                    <Label className=" font-medium">LOTES DETENIDOS POR UTE</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-semibold">LOTES DETENIDOS POR CGC</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON PLANOS DEFINITIVOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES TASADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES DECRETADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-semibold">LOTES PUBLICADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="mt-1 h-8 text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CONSIGNADOS O PAGADOS</Label>
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
                    LOTES ESTADO "O"</td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6 ">
                    <Label className=" font-semibold">LOTES DONACIONES</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
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
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES TASADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON RESOLUCION</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES INSCRITOS A FAVOR DEL FISCO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-semibold">LOTES SERVIDUMBRES</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON PLANOS DEFINITIVOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON DECRETO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES INSCRITOS A FAVOR DEL FISCO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-semibold">LOTES ADQUIRIDOS POR SC</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON PLANOS DEFINITIVOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
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
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES INSCRITOS A FAVOR DEL FISCO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-6">
                    <Label className=" font-semibold">LOTES ENAJENACION POR COMPENSACION</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON PLANOS DEFINITIVOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
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
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES CON ACCESO A TERRENO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES DECRETADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES PUBLICADOS</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-8">
                    <Label className=" font-medium">LOTES INSCRITOS A FAVOR DEL FISCO</Label>
                  </td>
                  <td className="px-2 py-1 border-l text-right">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>


                {/* SECCIÓN 4: TOTAL RECLAMOS TERMINADOS (Título con input) */}
                <tr className="border-b">
                  <td className="p-3 text-primary border-b bg-muted/50">
                    <Label className="font-bold">LOTES TASADO APROBADOS ESTADO "A"</Label>
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                  <td className="px-2 py-1 border-l">
                    <Input className="text-xs" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-primary border-b bg-muted/50">
                    <Label className="font-bold">LOTES EN TASACION</Label>
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
                    <Label className="font-bold">LOTES CON PLANO DEFINITIVO SIN INICIAR TASACION</Label>
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

