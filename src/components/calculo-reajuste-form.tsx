import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useState } from "react";

interface LoteCalculoRecord {
  id: string;
  idLote: string;
  estadoL: string;
  resol: string;
  fResol: string;
  fItas: string;
  propietari: string;
  montoCo: string;
  montoTa: string;
  fConsig: string;
  fInfPag: string;
}

const inputClass =
  "bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 shadow-sm transition";

export function CalculoReajusteForm() {
  const [fechaSolicitud, setFechaSolicitud] = useState("8-9-25");
  const [mesCalcular, setMesCalcular] = useState("01-08-2025");
  const [selectedOption, setSelectedOption] = useState<"vc" | "vj" | null>(
    null
  );
  const [lotes, setLotes] = useState<LoteCalculoRecord[]>([]);

  const handleDatosVC = () => {
    setSelectedOption("vc");
    // Aquí se cargarían los datos desde el backend
    setLotes([
      {
        id: "1",
        idLote: "64AS5110",
        estadoL: "VC",
        resol: "1500",
        fResol: "15-03-2021",
        fItas: "20-03-2021",
        propietari: "Juan Pérez",
        montoCo: "50,000,000",
        montoTa: "45,000,000",
        fConsig: "25-03-2021",
        fInfPag: "30-03-2021",
      },
      {
        id: "2",
        idLote: "64BS5515",
        estadoL: "VC",
        resol: "1501",
        fResol: "16-03-2021",
        fItas: "21-03-2021",
        propietari: "María García",
        montoCo: "60,000,000",
        montoTa: "55,000,000",
        fConsig: "26-03-2021",
        fInfPag: "31-03-2021",
      },
    ]);
  };

  const handleDatosVJ = () => {
    setSelectedOption("vj");
    // Aquí se cargarían los datos desde el backend
    setLotes([
      {
        id: "1",
        idLote: "64AS5110",
        estadoL: "VJ",
        resol: "1500",
        fResol: "15-03-2021",
        fItas: "20-03-2021",
        propietari: "Juan Pérez",
        montoCo: "50,000,000",
        montoTa: "45,000,000",
        fConsig: "25-03-2021",
        fInfPag: "30-03-2021",
      },
    ]);
  };

  const handleLimpiar = () => {
    setFechaSolicitud("");
    setMesCalcular("");
    setSelectedOption(null);
    setLotes([]);
  };

  const handleRealizarCalculos = () => {
    console.log("Realizar cálculos con:", {
      fechaSolicitud,
      mesCalcular,
      opcion: selectedOption,
    });
  };

  const handleBorrar = () => {
    setLotes([]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <Card className="border-l-4 border-l-primary-500">
        <CardHeader className="!p-0">
          <div className="border-b text-center py-3 bg-primary-500 rounded-t-lg">
            <h2 className="text-sm font-bold uppercase text-white">
              CÁLCULO REAJUSTE
            </h2>
          </div>
        </CardHeader>

        {/* Título de sección */}
        <CardContent className="p-4">
          <h3 className="text-sm font-bold text-gray-700 text-center">
            LOTES A CALCULAR SEGÚN FECHA DE REAJUSTE
          </h3>

          {/* Campos de entrada */}

          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fechaSolicitud" className="text-xs font-bold">
                Fecha Solicitud Calculo Reajuste
              </Label>
              <Input
                id="fechaSolicitud"
                type="text"
                value={fechaSolicitud}
                onChange={(e) => setFechaSolicitud(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mesCalcular" className="text-xs font-bold">
                Mes a Calcular
              </Label>
              <Input
                id="mesCalcular"
                type="text"
                value={mesCalcular}
                onChange={(e) => setMesCalcular(e.target.value)}
                className={inputClass}
              />
            </div>
            <div></div>
            <div className="flex justify-end items-end">
              <Button
                variant="secundario"
                onClick={handleLimpiar}
                className="w-full"
              >
                Limpiar
              </Button>
            </div>
          </div>

          {/* Botones de opciones */}
          <div className="flex gap-4 my-4">
            <Button
              variant={selectedOption === "vc" ? "default" : "secundario"}
              onClick={handleDatosVC}
              className="px-6"
            >
              Datos VC
            </Button>
            <Button
              variant={selectedOption === "vj" ? "default" : "secundario"}
              onClick={handleDatosVJ}
              className="px-6"
            >
              Datos VJ
            </Button>
          </div>

          {/* Tabla de lotes */}

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    #
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Id_Lote
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Estado_L
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Resol
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    F_Resol
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    F_Itas
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Propietari
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Monto_Co
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    Monto_Ta
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    F_Consig
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-700">
                    F_inf_pag
                  </th>
                </tr>
              </thead>
              <tbody>
                {lotes.map((lote, idx) => (
                    <tr
                      key={lote.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold text-gray-700">
                        {idx + 1}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.idLote}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.estadoL}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.resol}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.fResol}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.fItas}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.propietari}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.montoCo}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.montoTa}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.fConsig}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {lote.fInfPag}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Botones de acción */}
      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="secundario"
          onClick={handleRealizarCalculos}
          size="lg"
          className="px-8"
        >
          Realizar Calculos
        </Button>
        <Button
          variant="secundario"
          onClick={handleBorrar}
          size="lg"
          className="px-8"
        >
          Borrar
        </Button>
      </div>
    </div>
  );
}
