import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal";
import type { RolCausaRecord } from "./rol-causa-dialog";

interface ModificacionFormProps {
  rolCausa: RolCausaRecord | null;
  onVolverModificacion: () => void;
  onVolverPrincipal: () => void;
}

const inputClass =
  "bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm transition";

export function ModificacionForm({
  onVolverModificacion,
  onVolverPrincipal,
}: ModificacionFormProps) {
  const [selectedLoteIdx, setSelectedLoteIdx] = useState(0);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    tipoReclamo: "ART 12 EXP",
    rolCausa: "335-2021",
    reclamante: "Patricio Hernán San Martín Olivas y",
    montoConsigDolar: "562,379,068",
    montoConsigUF: "19,343,587",
    fechaConsignacion: "28-12-2020",
    encargReclamo: "M30",
    estadoReclamo: "ET",
    fRecepReclam: "08-03-2021",
    juzgado: "1° Juzgado Civil de Concepción",
    corteApelacion: "Concepción",
    fNotifReclamo: "03-03-2021",
    fVencEvacInf: "15-03-2021",
    infReclam: "11",
    fInfReclamo: "15-03-2021",
    fEvacInfRec: "15-03-2021",
    periloFisico: "Karen Alicia Emeg Elizalde",
    formaEnvio: "E",
    fechaCalcCuantia: "32-09-2020",
    montoReclamadoDolar: "969,611,845",
    montoReclamadoUF: "34,471,823",
    supReclamada: "",
    sent1Instancia: "",
    fSent1Inst: "",
    indem1DefInst: "",
    indem1DefInstUF: "",
    sup1Instancia: "",
    sent2Instancia: "",
    fSent2Inst: "",
    indem2DefInst: "",
    indem2DefInstUF: "",
    sup2Instancia: "",
    sentenciaCanacion: "",
    fSentCan: "",
    indDelCan: "",
    indDelCanUF: "",
    supCanacion: "",
    ofSolTD5DeFiac: "",
    fOfSolTD5DeFiac: "",
    numerotd5: "",
    montotd5: "",
    ofSd5UTE: "",
    fOfSd5UTE: "",
    ofUTE: "",
    fOfUTE: "",
    ofUtEnvCR: "",
    fOfUtEnvCR: "",
    montoIndem: "",
    fDecPagoExp: "",
    fDecPagoExp2: "",
    saldoSugExp: "",
    numerogr: "",
    fechagr: "",
    saldoApagDol: "",
    saldoApagUF: "",
    saldoSugExp2: "",
    observaciones:
      'Boleta "Aclaradora" perilo Nº 364 de fecha 08-09-2021. Ord. CDE Nº 703 de fecha 13-09-2021',
  });

  const lotes = [{ id: "64AS5300", name: "64AS5300" }];

  const leftFields = [
    { label: "Encarg. Reclamo", key: "encargReclamo" },
    { label: "Estado Reclamo", key: "estadoReclamo" },
    { label: "F Recep Reclam", key: "fRecepReclam" },
    { label: "Juzgado", key: "juzgado" },
    { label: "Corte Apelación", key: "corteApelacion" },
    { label: "F Notif Reclamo", key: "fNotifReclamo" },
    { label: "F Venc_Evac Inf", key: "fVencEvacInf" },
    { label: "Inf_Reclam", key: "infReclam" },
    { label: "F Inf Reclamo", key: "fInfReclamo" },
    { label: "F Evac Inf Rec", key: "fEvacInfRec" },
    { label: "Perilo Fisico", key: "periloFisico" },
    { label: "Forma Envio", key: "formaEnvio" },
    { label: "Fecha Calc Cuantia", key: "fechaCalcCuantia" },
    { label: "Monto Reclamado($)", key: "montoReclamadoDolar" },
    { label: "Monto Reclamado(UF)", key: "montoReclamadoUF" },
    { label: "Sup Reclamada", key: "supReclamada" },
  ];

  const rightFields = [
    { label: "Sent 1 Instancia", key: "sent1Instancia" },
    { label: "F Sent 1Inst.", key: "fSent1Inst" },
    { label: "Indem. Def 1Inst ($)", key: "indem1DefInst" },
    { label: "Indem. Def 1Inst (UF)", key: "indem1DefInstUF" },
    { label: "Sup 1Instancia", key: "sup1Instancia" },
    { label: "Sent 2 Instancia", key: "sent2Instancia" },
    { label: "F Sent 2Inst.", key: "fSent2Inst" },
    { label: "Indem. Def 2Inst ($)", key: "indem2DefInst" },
    { label: "Indem. Def 2Inst (UF)", key: "indem2DefInstUF" },
    { label: "Sup 2Instancia", key: "sup2Instancia" },
    { label: "Sentencia Canación", key: "sentenciaCanacion" },
    { label: "F. Sent Can", key: "fSentCan" },
    { label: "Ind Del Cas ($)", key: "indDelCan" },
    { label: "Ind Del Cas (UF)", key: "indDelCanUF" },
    { label: "Sup Casación", key: "supCanacion" },
    { label: "Of. Sol TD5 de Fiac.", key: "ofSolTD5DeFiac" },
    { label: "F Of Sol TD5 de Fiac.", key: "fOfSolTD5DeFiac" },
    { label: "Número TD5", key: "numerotd5" },
    { label: "Monto TD5", key: "montotd5" },
    { label: "Of. Sd5 UTE", key: "ofSd5UTE" },
    { label: "F Of Sd5 UTE", key: "fOfSd5UTE" },
    { label: "Of UTE", key: "ofUTE" },
    { label: "F Of UTE", key: "fOfUTE" },
    { label: "Of UTE Env CR", key: "ofUtEnvCR" },
    { label: "F Of UTE Env CR", key: "fOfUtEnvCR" },
    { label: "M Rec. Pago / Exp.", key: "montoIndem" },
    { label: "F Dec. Pago / Exp.", key: "fDecPagoExp" },
    { label: "F Dec. Pago / Exp.", key: "fDecPagoExp2" },
    { label: "Saldo a Pagar($)", key: "saldoSugExp" },
    { label: "Número GR", key: "numerogr" },
    { label: "Fecha GR", key: "fechagr" },
    { label: "Saldo a Pagar(UF)", key: "saldoApagUF" },
    { label: "Saldo Sup Exp", key: "saldoSugExp2" },
  ];

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleGuardar = () => {
    setIsConfirmModalOpen(false);
    console.log("Formulario de modificación guardado");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              Pantalla Modificación
            </h2>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="flex justify-end">
            <div className="text-sm font-bold bg-gray-200 px-4 py-2 border border-gray-300 rounded">
              Identificación Reclamación: 1
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sección de carga de datos y botones */}
      <div className="grid grid-cols-3 gap-6">
        {/* Botón Cargar Datos y Listado Lotes */}
        <Card className="border-l-4 border-l-primary-500">
          <CardContent className="p-4 space-y-3">
            <Button variant="secundario" className="w-full">
              Cargar Datos
            </Button>
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 border-b border-gray-300 px-3 py-2 text-xs font-bold text-gray-700">
                ID_LOTE
              </div>
              <div className="max-h-24 overflow-y-auto bg-white">
                {lotes.map((lote) => (
                  <Button
                    key={lote.id}
                    type="button"
                    onClick={() => setSelectedLoteIdx(lotes.indexOf(lote))}
                    className={`w-full px-3 py-2 text-sm cursor-pointer border-b border-gray-200 transition-colors text-left ${
                      selectedLoteIdx === lotes.indexOf(lote)
                        ? "bg-primary-100 hover:bg-primary-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-medium">{lote.id}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Summary */}
        <Card className="border-l-4 border-l-primary-500">
          <CardContent className="p-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-primary-600">Tipo Reclamo:</span>
              <span className="ml-2">{formData.tipoReclamo}</span>
            </div>
            <div>
              <span className="font-bold text-primary-600">Rol Causa:</span>
              <span className="ml-2">{formData.rolCausa}</span>
            </div>
            <div>
              <span className="font-bold text-primary-600">Reclamante:</span>
              <span className="ml-2 block">{formData.reclamante}</span>
            </div>
            <div>
              <span className="font-bold text-primary-600">
                Monto Consig. o Pag.($):
              </span>
              <span className="ml-2">{formData.montoConsigDolar}</span>
            </div>
            <div>
              <span className="font-bold text-primary-600">
                Monto Consig. o Pag(UF):
              </span>
              <span className="ml-2">{formData.montoConsigUF}</span>
            </div>
            <div>
              <span className="font-bold text-primary-600">
                Fecha Consignación:
              </span>
              <span className="ml-2">{formData.fechaConsignacion}</span>
            </div>
          </CardContent>
        </Card>

        {/* Botones Volver */}
        <div className="space-y-3 flex flex-col justify-between">
          <Button
            variant="secundario"
            onClick={onVolverPrincipal}
            className="h-full"
          >
            Volver a Principal
          </Button>
          <Button
            variant="secundario"
            onClick={onVolverModificacion}
            className="h-full"
          >
            Volver a Modificación
          </Button>
        </div>
      </div>

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
            {leftFields.map((field) => (
              <div key={field.key} className="flex items-center gap-2">
                <Label
                  htmlFor={field.key}
                  className="w-40 text-xs font-bold bg-gray-200 px-3 py-2 border border-gray-300 rounded"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.key}
                  type="text"
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className={`flex-1 ${inputClass}`}
                />
              </div>
            ))}

            {/* Columna Derecha */}
            {rightFields.map((field) => (
              <div key={field.key} className="flex items-center gap-2">
                <Label
                  htmlFor={field.key}
                  className="w-40 text-xs font-bold bg-gray-200 px-3 py-2 border border-gray-300 rounded"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.key}
                  type="text"
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className={`flex-1 ${inputClass}`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Observaciones */}
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
            value={formData.observaciones}
            onChange={(e) => handleInputChange("observaciones", e.target.value)}
            className={`w-full min-h-24 ${inputClass}`}
          />
        </CardContent>
      </Card>

      {/* Botón GRABAR */}
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
    </div>
  );
}
