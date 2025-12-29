import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal";
import { RolCausaDialog, type RolCausaRecord } from "./rol-causa-dialog";
import { ModificacionForm } from "./modificacion-form";
import { MoreVerticalIcon } from "lucide-react";

// Clases para inputs consistentes con el design system
const inputClass =
  "bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm transition";

export function LoteForm() {
  const [decretoVJ, setDecretoVJ] = useState("587");
  const [decretoVC, setDecretoVC] = useState("");
  const [selectedLote, setSelectedLote] = useState(0);
  const [isIngreso, setIsIngreso] = useState(true);
  const [isModificacion, setIsModificacion] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [showRolCausaDialog, setShowRolCausaDialog] = useState(false);
  const [showModificacionForm, setShowModificacionForm] = useState(false);
  const [selectedRolCausa, setSelectedRolCausa] =
    useState<RolCausaRecord | null>(null);

  const lotes = [
    { id: 1, name: "64AS5110" },
    { id: 2, name: "64BS5515" },
  ];

  const formFields = {
    left: [
      { label: "Tipo Reclamo", name: "tipoReclamo" },
      { label: "Reclamante", name: "reclamante" },
      { label: "Demandado", name: "demandado" },
      { label: "F Recep Reclam", name: "fRecepReclam", type: "date" },
      { label: "Rol Causa", name: "rolCausa" },
      { label: "Juzgado", name: "juzgado" },
      { label: "Corte Apelación", name: "corteApelacion" },
      { label: "F Notif Reclamo", name: "fNotifReclamo", type: "date" },
      { label: "F Venc_Evac Inf", name: "fVencEvacInf", type: "date" },
      { label: "Inf_Reclam", name: "infReclam" },
      { label: "F Inf Reclamo", name: "fInfReclamo", type: "date" },
      { label: "F Evac Inf Rec", name: "fEvacInfRec", type: "date" },
      { label: "Perito Físico", name: "peritoFisico" },
    ],
    right: [
      { label: "Forma Envío", name: "formaEnvio" },
      { label: "Monto Tasado ($)", name: "montoTasadoDolar" },
      { label: "Monto Tasado (UF)", name: "montoTasadoUF" },
      { label: "Fecha Tasación", name: "fechaTasacion", type: "date" },
      { label: "Monto Consaig o Pagado ($)", name: "montoConsaigDolar" },
      { label: "Monto Consaig o Pagado UF", name: "montoConsaigUF" },
      { label: "Fecha Consignado", name: "fechaConsaignado", type: "date" },
      { label: "Sup_Expropiada", name: "supExpropriada" },
      { label: "Fecha Calc_Cuantía", name: "fechaCalcCuantia", type: "date" },
      { label: "Monto Reclamado($)", name: "montoReclamadoDolar" },
      { label: "Monto Reclamado(UF)", name: "montoReclamadoUF" },
      { label: "Sup Reclamada", name: "supReclamada" },
      { label: "Estado Reclamo", name: "estadoReclamo", isSelect: true },
      { label: "Encarg Reclamo", name: "encargReclamo", isSelect: true },
    ],
  };

  const handleGuardar = () => {
    setIsConfirmModalOpen(false);
    console.log("Formulario guardado");
  };

  const handleModificacionChange = (checked: boolean) => {
    setIsModificacion(checked as boolean);
    if (checked) {
      setShowRolCausaDialog(true);
    }
  };

  const handleRolCausaSelect = (rolCausa: RolCausaRecord) => {
    setSelectedRolCausa(rolCausa);
    setShowModificacionForm(true);
  };

  // Si está en modo modificación, mostrar el formulario de modificación
  if (showModificacionForm && selectedRolCausa) {
    return (
      <ModificacionForm
        rolCausa={selectedRolCausa}
        onVolverModificacion={() => {
          setShowModificacionForm(false);
          setShowRolCausaDialog(true);
        }}
        onVolverPrincipal={() => {
          setShowModificacionForm(false);
          setSelectedRolCausa(null);
          setIsModificacion(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Decretos */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">Decretos</h2>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="grid grid-cols-2 gap-8">
            {/* COLUMNA IZQUIERDA: Decretos */}
            <div className="space-y-4">
              {/* Fila con Decreto VJ y Decreto VC */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="decreto-vj-1">Decreto VJ</Label>
                  <Input
                    id="decreto-vj-1"
                    type="text"
                    value={decretoVJ}
                    onChange={(e) => setDecretoVJ(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="decreto-vc">Decreto VC</Label>
                  <Input
                    id="decreto-vc"
                    type="text"
                    value={decretoVC}
                    onChange={(e) => setDecretoVC(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Segundo Decreto VJ */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="decreto-vj-2">Decreto VJ</Label>
                  <Input id="decreto-vj-2" type="text" className={inputClass} />
                </div>
              </div>

              {/* Tercer Decreto VJ */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="decreto-vj-3">Decreto VJ</Label>
                  <Input id="decreto-vj-3" type="text" className={inputClass} />
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Opciones del Formulario y Botones */}
            <div className="space-y-4 items-center flex flex-col">
              {/* Opciones del Formulario */}
              <div className="space-y-3">
                <div className="text-sm font-bold text-gray-700">
                  Opciones del Formulario
                </div>
                <div className="flex gap-6">
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      id="ingreso-check"
                      checked={isIngreso}
                      onCheckedChange={(checked) =>
                        setIsIngreso(checked as boolean)
                      }
                    />
                    <span className="text-sm font-bold">Ingreso</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      id="modificacion-check"
                      checked={isModificacion}
                      onCheckedChange={handleModificacionChange}
                    />
                    <span className="text-sm">Modificación</span>
                  </Label>
                </div>
              </div>

              {/* Botones BUSCAR y Limpiar */}
              <div className="flex gap-3">
                <Button variant="secundario" size="lg" className="px-8">
                  BUSCAR
                </Button>
                <Button variant="secundario" size="lg" className="px-8">
                  Limpiar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gestión de Lotes */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              Gestión de Lotes
            </h2>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Listado de Lotes */}
            <div className="col-span-5">
              <div className="border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="flex bg-gray-200 border-b border-gray-300">
                  <div className="flex-1 p-2 text-center text-xs font-bold text-gray-700">
                    Lote
                  </div>
                  <Button
                    variant="ghost"
                    className="px-3 py-1 hover:bg-gray-300 transition-colors text-gray-600"
                  >
                    <MoreVerticalIcon size={16} />
                  </Button>
                </div>
                <div className="max-h-32 overflow-y-auto">
                  {lotes.map((lote, idx) => (
                    <Button
                      key={lote.id}
                      onClick={() => setSelectedLote(idx)}
                      className={`flex items-center border-b border-gray-200 cursor-pointer transition-colors ${
                        selectedLote === idx
                          ? "bg-primary-100 hover:bg-primary-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-10 text-center py-2 text-xs border-r border-gray-300 font-bold text-gray-700">
                        {idx + 1}
                      </div>
                      <div className="flex-1 p-2 text-sm text-gray-800">
                        {lote.name}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Controles de Navegación */}
            <div className="col-span-1 flex flex-col justify-center items-center gap-2">
              <Button variant="secundario" size="sm" className="w-12 h-10">
                ↑
              </Button>
              <Button variant="secundario" size="sm" className="w-12 h-10">
                ↓
              </Button>
              <Button variant="secundario" size="sm" className="w-12 h-10">
                ←
              </Button>
              <Button variant="secundario" size="sm" className="w-12 h-10">
                ↙
              </Button>
            </div>

            {/* Tabla de Lotes - Mismo ancho que Listado */}
            <div className="col-span-6 overflow-x-auto">
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        Lote
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        ID_Lote
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        Estado_Lo
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        Monto_Ta
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        Monto_Ta
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-gray-700 font-bold whitespace-nowrap">
                        fe
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan={6}
                        className="border border-gray-300 px-2 py-8 bg-white"
                      ></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botones Buscar y Limpiar */}

      {/* Formulario en dos columnas */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              Información del Reclamo
            </h2>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {/* Columna Izquierda */}
            {formFields.left.map((field) => (
              <div key={field.name} className="flex items-center gap-2">
                <Label
                  htmlFor={field.name}
                  className="w-32 text-xs font-bold px-3 py-2 rounded"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.name}
                  type={field.type || "text"}
                  className={`flex-1 ${inputClass}`}
                />
              </div>
            ))}

            {/* Columna Derecha */}
            {formFields.right.map((field) => (
              <div key={field.name} className="flex items-center gap-2">
                <Label
                  htmlFor={field.name}
                  className="w-32 text-xs font-bold px-3 py-2 bo rounded"
                >
                  {field.label}
                </Label>
                {field.isSelect ? (
                  <Select>
                    <SelectTrigger className={`flex-1 ${inputClass}`}>
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="opcion1">Opción 1</SelectItem>
                      <SelectItem value="opcion2">Opción 2</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id={field.name}
                    type={field.type || "text"}
                    className={`flex-1 ${inputClass}`}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Observaciones y Cálculo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-primary-500">
          <CardHeader className="!p-0">
            <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
              <h2 className="text-sm font-bold uppercase text-white">
                Observaciones
              </h2>
            </div>
          </CardHeader>
          <CardContent className="mt-4">
            <Textarea
              className={`w-full min-h-24 ${inputClass}`}
              placeholder="Ingrese observaciones..."
            />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary-500">
          <CardHeader className="!p-0">
            <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
              <h2 className="text-sm font-bold uppercase text-white">
                Acciones
              </h2>
            </div>
          </CardHeader>
          <CardContent className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calcular-montos-input">Calcular Montos</Label>
              <div className="flex gap-2">
                <Input
                  id="calcular-montos-input"
                  type="text"
                  className={inputClass}
                  placeholder="Ingrese valor..."
                />
                <Button variant="secundario" className="px-8">
                  Calcular
                </Button>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="secundario" size="sm" className="w-12">
                %
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end space-x-3">
        <Button variant="secundario" size="lg">
          Cancelar
        </Button>
        <Button size="lg" onClick={() => setIsConfirmModalOpen(true)}>
          GRABAR
        </Button>
      </div>

      <ConfirmacionGuardarModal
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onConfirm={handleGuardar}
      />

      <RolCausaDialog
        isOpen={showRolCausaDialog}
        onClose={() => {
          setShowRolCausaDialog(false);
          setIsModificacion(false);
        }}
        onSelect={handleRolCausaSelect}
      />
    </div>
  );
}
