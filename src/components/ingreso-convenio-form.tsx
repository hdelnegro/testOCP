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
import { ConfirmacionGuardarModal } from "./confirmacion-guardar-modal";

const inputClass =
  "bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm transition";

export function IngresoConvenioForm() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    idLote: "167AV501",
    lote: "1",
    etapaLote: "",
    convenioFinalizado: "Convenio Finalizado Inscr. y Pag",
    fCompPago: "",
    estadoLote: "VC",
    propietarioSII: "MORELIA DEL CARMEN DOMINGUEZ DOMINGUEZ",
    rolSii: "460-82",
    fNotif: "11-03-2002",
    propAparente: "MORELIA DEL CARMEN DOMINGUEZ DOMINGUEZ",
    rutExp: "7.141.575-3",
    fechaAcceso: "12-03-2002",
    direccion: "Urrutia esquina Matucana s/n, comuna de Parral, VII R",
    fonos: "73-463896",
    respAcceso: "A",
    impugnacion: "No",
    fax: "[SI]",
    mTasacion: "56.146.540",
    recepConv: "11-04-2002",
    fDecreto: "30-04-2002",
    fConservador: "",
    resolucion: "1998",
    estConv: "A",
    bNacionales: "23-05-2002",
    cBRFisco: "Parral",
    resolModif: "251",
    cBRProp: "Parral",
    fContraloría: "29-05-2002",
    fojasPropio: "3288",
    fojasPropo: "1287",
    fTomaRazon: "05-06-2002",
    numeroFisco: "1767",
    expediente: "218 VI",
    numeroPropo: "778",
    fPublicacion: "01-07-2002",
    anioFisco: "2002",
    decretoVJ: "",
    anioProp: "1997",
    fREPublic: "",
    fIngPago: "21-11-2002",
    fPublicVJ: "",
    aFiscalia: "2409",
    fRemision: "11-07-2002",
    infPagoNum: "25066",
    fechaTPM: "",
    fOficioAFiscalía: "17-04-2002",
    numeroOficio: "AC0536/2002",
    fInfPago: "25-11-2002",
    montoConv: "56.146.540",
    numProceso: "",
    notaria: "Alvarez Diaz",
    mPagoConv: "56.230.760",
    fechaConv: "14-03-2002",
    ordFisSubx: "14447",
    repertorio: "1762-2002",
    fGuiaRemis: "27-11-2002",
    responsable: "ABACO",
    fOrdinario: "25-04-2002",
    fEscritFiscalía: "",
    montoAntic: "",
    observaciones: "mail 1/7/2 encargada escritura a Patricio Silva",
    decretoVC: "861",
    personaContacto: "",
    fMontoAntic: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGuardar = () => {
    setIsConfirmModalOpen(false);
    console.log("Formulario guardado");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              INGRESO CONVENIO
            </h2>
          </div>
        </CardHeader>

        {/* Proyecto */}
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Label
                htmlFor="idLote"
                className="w-28 text-xs font-bold px-3 py-2 border rounded"
              >
                ID_LOTE
              </Label>
              <Input
                id="idLote"
                value={formData.idLote}
                onChange={(e) => handleInputChange("idLote", e.target.value)}
                className={`flex-1 ${inputClass}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="lote"
                className="w-20 text-xs font-bold px-3 py-2 border rounded"
              >
                LOTE
              </Label>
              <Input
                id="lote"
                value={formData.lote}
                onChange={(e) => handleInputChange("lote", e.target.value)}
                className={`flex-1 ${inputClass}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="etapaLote"
                className="w-28 text-xs font-bold px-3 py-2 border rounded"
              >
                Etapa Lote
              </Label>
              <Input
                id="etapaLote"
                value={formData.etapaLote}
                onChange={(e) => handleInputChange("etapaLote", e.target.value)}
                className={`flex-1 ${inputClass}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label
                htmlFor="convenioFinalizado"
                className="text-xs font-bold px-3 py-2 border rounded whitespace-nowrap"
              >
                Convenio Final. Inscr. Pag
              </Label>
              <Input
                id="convenioFinalizado"
                value={formData.convenioFinalizado}
                onChange={(e) =>
                  handleInputChange("convenioFinalizado", e.target.value)
                }
                className={`flex-1 ${inputClass}`}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formulario principal en 4 columnas */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              Datos del Convenio
            </h2>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-3">
            {/* COLUMNA 1 */}
            <div className="space-y-3">
              {[
                { label: "Estado Lote", key: "estadoLote" },
                { label: "F_NOTIF", key: "fNotif" },
                { label: "Fecha Acceso", key: "fechaAcceso" },
                { label: "Resp. Acceso", key: "respAcceso", isSelect: true },
                { label: "M. Tasación", key: "mTasacion" },
                { label: "Resolución", key: "resolucion" },
                { label: "Resol Modif", key: "resolModif" },
                { label: "Expediente", key: "expediente" },
                { label: "Decreto VJ", key: "decretoVJ" },
                { label: "F_Decreto VJ", key: "fPublicVJ" },
                { label: "F_Public_VJ", key: "fPublicVJ" },
                { label: "Fecha TPM", key: "fechaTPM" },
                { label: "Monto Conv.", key: "montoConv" },
                { label: "Fecha Conv.", key: "fechaConv" },
                { label: "Responsable", key: "responsable" },
              ].map((field) => (
                <div key={field.key} className="flex items-center gap-2">
                  <Label
                    htmlFor={field.key}
                    className="w-32 text-xs font-bold px-2 py-1 border rounded"
                  >
                    {field.label}
                  </Label>
                  {field.isSelect ? (
                    <Select
                      value={formData[field.key as keyof typeof formData]}
                      onValueChange={(value) =>
                        handleInputChange(field.key, value)
                      }
                    >
                      <SelectTrigger className={`flex-1 ${inputClass}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={field.key}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        handleInputChange(field.key, e.target.value)
                      }
                      className={`flex-1 ${inputClass}`}
                    />
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="observaciones"
                  className="w-32 text-xs font-bold px-2 py-1 border rounded self-start"
                >
                  Observaciones
                </Label>
                <Textarea
                  id="observaciones"
                  value={formData.observaciones}
                  onChange={(e) =>
                    handleInputChange("observaciones", e.target.value)
                  }
                  className={`flex-1 min-h-16 ${inputClass}`}
                />
              </div>
            </div>

            {/* COLUMNA 2 */}
            <div className="space-y-3">
              {[
                { label: "Propietario SII", key: "propietarioSII" },
                { label: "Prop. Aparente", key: "propAparente" },
                { label: "Dirección", key: "direccion" },
                { label: "Impugnación", key: "impugnacion" },
                { label: "Recep. Conv.", key: "recepConv" },
                { label: "Est. Conv.", key: "estConv", isSelect: true },
                { label: "C.B.R. Prop.", key: "cBRProp" },
                { label: "Fojas Prop.", key: "fojasPropo" },
                { label: "Número Prop.", key: "numeroPropo" },
                { label: "Año Prop.", key: "anioProp" },
                { label: "a Fiscalía", key: "aFiscalia" },
                { label: "F. Oficio a Fiscalía", key: "fOficioAFiscalía" },
                { label: "Num Proceso", key: "numProceso" },
                { label: "ORD. Fis.Subs", key: "ordFisSubx" },
                { label: "F. Ordinario", key: "fOrdinario" },
              ].map((field) => (
                <div key={field.key} className="flex items-center gap-2">
                  <Label
                    htmlFor={field.key}
                    className="w-36 text-xs font-bold px-2 py-1 border rounded"
                  >
                    {field.label}
                  </Label>
                  {field.isSelect ? (
                    <Select
                      value={formData[field.key as keyof typeof formData]}
                      onValueChange={(value) =>
                        handleInputChange(field.key, value)
                      }
                    >
                      <SelectTrigger className={`flex-1 ${inputClass}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={field.key}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        handleInputChange(field.key, e.target.value)
                      }
                      className={`flex-1 ${inputClass}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* COLUMNA 3 */}
            <div className="space-y-3">
              {[
                { label: "F. Decreto", key: "fDecreto" },
                { label: "B. Nacionales", key: "bNacionales" },
                { label: "F. Contraloría", key: "fContraloría" },
                { label: "F.Toma Razón", key: "fTomaRazon" },
                { label: "Nº de Oficio", key: "numeroOficio" },
                { label: "Notaría", key: "notaria" },
                { label: "Repertorio", key: "repertorio" },
                { label: "F.Escrit Fiscalía", key: "fEscritFiscalía" },
                { label: "Persona Contacto", key: "personaContacto" },
                { label: "Decreto VC", key: "decretoVC" },
              ].map((field) => (
                <div key={field.key} className="flex items-center gap-2">
                  <Label
                    htmlFor={field.key}
                    className="w-36 text-xs font-bold px-2 py-1 border rounded"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.key}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    className={`flex-1 ${inputClass}`}
                  />
                </div>
              ))}
            </div>

            {/* COLUMNA 4 */}
            <div className="space-y-3">
              {[
                { label: "F_Comp_Pago", key: "fCompPago" },
                { label: "Rol_Sii", key: "rolSii" },
                { label: "RutExp", key: "rutExp" },
                { label: "Fonos", key: "fonos" },
                { label: "Fax", key: "fax" },
                { label: "F.Conservador", key: "fConservador" },
                { label: "C.B.R. Fisico", key: "cBRFisco" },
                { label: "Fojas Fisico", key: "fojasPropio" },
                { label: "Número Fisico", key: "numeroFisco" },
                { label: "Año Fisico", key: "anioFisco" },
                { label: "F.Ing Pago", key: "fIngPago" },
                { label: "Inf. Pago Nº", key: "infPagoNum" },
                { label: "F. Inf. Pago", key: "fInfPago" },
                { label: "M. Pago Conv", key: "mPagoConv" },
                { label: "F. Guía Remis.", key: "fGuiaRemis" },
                { label: "Monto Antic.", key: "montoAntic" },
                { label: "F. Monto Antic", key: "fMontoAntic" },
              ].map((field) => (
                <div key={field.key} className="flex items-center gap-2">
                  <Label
                    htmlFor={field.key}
                    className="w-36 text-xs font-bold px-2 py-1 border rounded"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.key}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    className={`flex-1 ${inputClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botones de acciones */}
      <div className="flex justify-center gap-4">
        <Button variant="secundario">Datos ING.</Button>
        <Button variant="secundario">Datos JURID.</Button>
        <Button variant="secundario">Datos JUD.</Button>
      </div>

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
