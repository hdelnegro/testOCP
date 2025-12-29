import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { DataTable } from "@/shared/components/data-table/data-table"
import { Button } from "@/shared/components/ui/button"
import { etapasData } from "@/shared/lib/dataMock"

// Tipo de dato para las etapas
type EtapaData = {
  etapa: string
  cantidad: number
}

// Definición de columnas
const columns: ColumnDef<EtapaData>[] = [
  {
    id: "etapa",
    accessorKey: "etapa",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-white hover:text-white hover:bg-primary-600"
        >
          Etapa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("etapa")}</div>
    },
  },
  {
    id: "cantidad",
    accessorKey: "cantidad",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full justify-center text-white hover:text-white hover:bg-primary-600"
        >
          Cantidad
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("cantidad")}</div>
    },
  },
]

export function LotesPorEtapasTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lotes por Etapas</CardTitle>
        <CardDescription>Distribución de lotes según su etapa actual</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={etapasData}
          enableSearch={true}
          searchPlaceholder="Buscar etapa..."
          pageSize={10}
          enableColumnVisibility={false}
          maxHeight="calc(100vh - 400px)"
        />
      </CardContent>
    </Card>
  )
}
