import { createFileRoute } from "@tanstack/react-router";
import { CrearBaseForm } from "@/components/crear-base-form";
import { EstudioLotesForm } from "@/components/estudio-lotes-form";
import { IngresoIngenieriaForm } from "@/components/ingreso-ingenieria-form";
import { IngresoProyectoForm } from "@/components/ingreso-proyecto-form";
import { PlanoDefinitivoForm } from "@/components/plano-definitivo-form";
import { PlanoNuevoForm } from "@/components/plano-nuevo-form";
import { IngresoJudicialForm } from "@/components/ingreso-judicial";
import { IngresoJuridicaForm } from "@/components/ingreso-juridica";
import { LotesEnTramitesForm } from "@/components/lotes-en-tramites-form";
import { LoteForm } from "@/components/reclamos-form";
import { IngresoReceptoresVcForm } from "@/components/ingreso-receptores-vc-form";
import { IngresoBoletasForm } from "@/components/ingreso-boletas-form";
import { IngresoBoletasConceptoForm } from "@/components/ingreso-boletas-concepto-form";
import { IngresoBoletasNotariosCbrForm } from "@/components/ingreso-boletas-notarios-cbr-form";
import { DatosNotariosForm } from "@/components/ingreso-datos-notarios-form";
import { IngresoDatosNotariosVcForm } from "@/components/ingreso-datos-notarios-vc-form";
import { IngresoPeritosTasadoresForm } from "@/components/ingreso-peritos-tasadores-form";
import { IngresoPeritosTasadoresVcForm } from "@/components/ingreso-peritos-tasadores-vc-form";
import { IngresoPeritosjudicialesForm } from "@/components/ingreso-peritos-judiciales-form";
import { IngresoPeritosjudicialesVcForm } from "@/components/ingreso-peritos-judiciales-vc-form";
import { IngresoPublicacionesForm } from "@/components/ingreso-publicaciones-vc-form";
import { IngresoDatosPublicacionesForm } from "@/components/ingreso-datos-publicaciones-form";
import IngresoReceptoresForm from "@/components/ingreso-receptores";
import IngresoDatosTasadoresForm from "@/components/ingreso-datos-tasadores-form";
import IngresoMontoForm from "@/components/ingreso-monto";
import { LotesEnEstadosForm } from "@/components/lotes-otros-estados";
import { IngresoTd5Form } from "@/components/ingreso-td5-form";
import { IngresoConvenioForm } from "@/components/ingreso-convenio-form";
import { CalculoReajusteForm } from "@/components/calculo-reajuste-form";

export const Route = createFileRoute("/_authenticated/formularios/$tipo")({
  component: FormularioComponent,
});

const FORMULARIOS_CONFIG = {
  "crear-base": {
    component: CrearBaseForm,
    title: "Crear Base Formularios",
  },
  "estudio-lotes": {
    component: EstudioLotesForm,
    title: "Estudio Lotes Stand By",
  },
  "ingreso-ingenieria": {
    component: IngresoIngenieriaForm,
    title: "Ingreso Ingeniería",
  },
  "ingreso-proyecto": {
    component: IngresoProyectoForm,
    title: "Ingreso Proyecto",
  },
  "ingreso-judicial": {
    component: IngresoJudicialForm,
    title: "Ingreso Judicial",
  },
  "ingreso-juridica": {
    component: IngresoJuridicaForm,
    title: "Ingreso Jurídica",
  },
  "plano-definitivo": {
    component: PlanoDefinitivoForm,
    title: "Plano Definitivo",
  },
  "plano-nuevo": {
    component: PlanoNuevoForm,
    title: "Ingreso Plano Nuevo",
  },
  "lotes-en-tramites": {
    component: LotesEnTramitesForm,
    title: "Lotes en tramites",
  },
  reclamos: {
    component: LoteForm,
    title: "Reclamos",
  },
  "ingreso-receptores": {
    component: IngresoReceptoresForm,
    title: "Ingreso de receptores",
  },
  "ingreso-receptores-vc": {
    component: IngresoReceptoresVcForm,
    title: "Ingreso de receptores VC",
  },
  "ingreso-boletas": {
    component: IngresoBoletasForm,
    title: "Ingreso de boletas (Antiguo)",
  },
  "ingreso-boletas-concepto": {
    component: IngresoBoletasConceptoForm,
    title: "Ingreso de boletas por concepto",
  },
  "ingreso-boletas-notarios-cbr": {
    component: IngresoBoletasNotariosCbrForm,
    title: "Ingreso de notarios y CBR",
  },
  "ingreso-monto": {
    component: IngresoMontoForm,
    title: "Ingreso de monto",
  },
  "ingreso-datos-notarios": {
    component: DatosNotariosForm,
    title: "Ingreso de datos notarios",
  },
  "ingreso-datos-notarios-vc": {
    component: IngresoDatosNotariosVcForm,
    title: "Ingreso de datos notarios VC",
  },
  "ingreso-peritos-tasadores": {
    component: IngresoPeritosTasadoresForm,
    title: "Ingreso de peritos tasadores",
  },
  "ingreso-peritos-tasadores-vc": {
    component: IngresoPeritosTasadoresVcForm,
    title: "Ingreso de peritos tasadores VC",
  },
  "ingreso-datos-tasadores": {
    component: IngresoDatosTasadoresForm,
    title: "Ingreso de datos tasadores",
  },
  "ingreso-peritos-judiciales": {
    component: IngresoPeritosjudicialesForm,
    title: "Ingreso de peritos judiciales",
  },
  "ingreso-peritos-judiciales-vc": {
    component: IngresoPeritosjudicialesVcForm,
    title: "Ingreso de peritos judiciales VC",
  },
  "ingreso-publicaciones-vc": {
    component: IngresoPublicacionesForm,
    title: "Ingreso de publicaciones VC",
  },
  "ingreso-datos-publicaciones": {
    component: IngresoDatosPublicacionesForm,
    title: "Ingreso de datos publicaciones",
  },
  "lotes-en-otros-estados": {
    component: LotesEnEstadosForm,
    title: "Lotes en otros estados",
  },
  "ingreso-td5": {
    component: IngresoTd5Form,
    title: "Ingreso TD5",
  },
  "ingreso-convenio": {
    component: IngresoConvenioForm,
    title: "Ingreso Convenio",
  },
  "calculo-reajuste": {
    component: CalculoReajusteForm,
    title: "Cálculo Reajuste",
  },
} as const;

function FormularioComponent() {
  const { tipo } = Route.useParams();

  const config = FORMULARIOS_CONFIG[tipo as keyof typeof FORMULARIOS_CONFIG];

  // if (!config) {
  //   return <NotFound>Tipo de formulario no válido: {tipo}</NotFound>
  // }

  const FormComponent = config.component;

  return (
    <div className="space-y-6">
      {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <span>/</span>
        <span className="text-foreground font-medium">
          {config.title}
        </span>
      </div> */}
      <FormComponent />
    </div>
  );
}
