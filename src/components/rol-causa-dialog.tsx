import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"

interface RolCausaDialogProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (rolCausa: RolCausaRecord) => void
}

export interface RolCausaRecord {
  id: string
  tipo: string
  reclamante: string
  rolCausa: string
}

const inputClass =
  "bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm transition"

export function RolCausaDialog({ isOpen, onClose, onSelect }: RolCausaDialogProps) {
  const [searchValue, setSearchValue] = useState("335-2021")
  const [selectedRow, setSelectedRow] = useState(0)

  // Datos de ejemplo
  const mockResults: RolCausaRecord[] = [
    {
      id: "1",
      tipo: "ART 12 EX",
      reclamante: "Patricio Hernán San Martín Olivas y",
      rolCausa: "335-2021",
    },
  ]

  const handleSelect = () => {
    if (selectedRow < mockResults.length) {
      onSelect(mockResults[selectedRow])
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">PANTALLA MODIFICACIÓN</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Campo de búsqueda */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rol-causa-search">Rol Causa</Label>
              <Input
                id="rol-causa-search"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={inputClass}
              />
            </div>
            <div></div>
            <div className="flex items-end">
              <Button
                variant="secundario"
                onClick={() => console.log("Buscar:", searchValue)}
                className="w-full"
              >
                Buscar Causa
              </Button>
            </div>
          </div>

          {/* Tabla de resultados */}
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold w-12">
                    #
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold">
                    IDD
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold">
                    Tipo Recl
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold">
                    Reclamante
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold">
                    Rol Causa
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockResults.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedRow(idx)}
                    className={`cursor-pointer transition-colors ${
                      selectedRow === idx
                        ? "bg-primary-100 hover:bg-primary-200"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <td className="border border-gray-300 px-3 py-2 text-center font-bold text-gray-700">
                      {idx + 1}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">{row.id}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.tipo}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.reclamante}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.rolCausa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3">
            <Button variant="secundario" onClick={handleSelect}>
              MODIFICAR →
            </Button>
            <Button variant="secundario" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
