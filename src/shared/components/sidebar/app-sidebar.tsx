import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/shared/components/ui/sidebar";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { Files, Home, FileText, Users, BarChart3 } from "lucide-react";
import { NavFormularios } from "./nav-formularios";
import { NavAdmin } from "./nav-admin";
import type { FormType } from "./types";

// TODO: corregir tipado
const navigationData = {
  formularios: [
    {
      title: "Formularios - Expropiación",
      icon: Files,
      items: [
        {
          title: "Solicitud de creación de BBDD",
          value: "crear-base" as FormType,
        },
        {
          title: "Estudio Lotes Stand By",
          value: "estudio-lotes" as FormType,
        },
        {
          title: "Ingreso Ingeniería",
          value: "ingreso-ingenieria" as FormType,
        },
        {
          title: "Ingreso Proyecto",
          value: "ingreso-proyecto" as FormType,
        },
        {
          title: "Ingreso Judicial",
          value: "ingreso-judicial" as FormType,
        },
        {
          title: "Ingreso Jurídica",
          value: "ingreso-juridica" as FormType,
        },
        {
          title: "Plano Definitivo/Envío a Tasación",
          value: "plano-definitivo" as FormType,
        },
        {
          title: "Ingreso Plano Nuevo",
          value: "plano-nuevo" as FormType,
        },
        {
          title: "Reclamos",
          value: "reclamos" as FormType,
        },
        {
          title: "Ingreso Convenio",
          value: "ingreso-convenio" as FormType,
        },
        {
          title: "Cálculo Reajuste",
          value: "calculo-reajuste" as FormType,
        },
        {
          title: "Informe Ejecutivo",
          icon: FileText,
          items: [
            {
              title: "Lotes en tramites",
              value: "lotes-en-tramites" as FormType,
            },
            {
              title: "Lotes en otros estados",
              value: "lotes-en-otros-estados" as FormType,
            },
          ],
        },
      ],
    },
    {
      title: "Formularios - Gastos Inherentes",
      icon: Files,
      items: [
        {
          title: "Receptores",
          value: "ingreso-receptores" as FormType,
        },
        {
          title: "Receptores VC",
          value: "ingreso-receptores-vc" as FormType,
        },
        {
          title: "Boletas (Antiguo)",
          value: "ingreso-boletas" as FormType,
        },
        {
          title: "Boletas por concepto",
          value: "ingreso-boletas-concepto" as FormType,
        },
        {
          title: "Notarios y CBR",
          value: "ingreso-boletas-notarios-cbr" as FormType,
        },
        {
          title: "Ingreso de monto",
          value: "ingreso-monto" as FormType,
        },
        {
          title: "Datos notarios",
          value: "ingreso-datos-notarios" as FormType,
        },
        {
          title: "Datos notarios VC",
          value: "ingreso-datos-notarios-vc" as FormType,
        },
        {
          title: "Peritos tasadores",
          value: "ingreso-peritos-tasadores" as FormType,
        },
        {
          title: "Peritos tasadores VC",
          value: "ingreso-peritos-tasadores-vc" as FormType,
        },
        {
          title: "Datos tasadores",
          value: "ingreso-datos-tasadores" as FormType,
        },
        {
          title: "Peritos judiciales",
          value: "ingreso-peritos-judiciales" as FormType,
        },
        {
          title: "Peritos judiciales VC",
          value: "ingreso-peritos-judiciales-vc" as FormType,
        },
        {
          title: "Publicaciones",
          value: "ingreso-datos-publicaciones" as FormType,
        },
        {
          title: "Publicaciones VC",
          value: "ingreso-publicaciones-vc" as FormType,
        },
        {
          title: "Ingreso TD5",
          value: "ingreso-td5" as FormType,
        },
      ],
    },
  ],
  admin: [
    {
      title: "Admin",
      icon: Users,
      items: [
        {
          title: "Gestión de usuarios",
          url: "/admin/usuarios",
        },
        {
          title: "Registro de auditoría",
          url: "/admin/activity_logs",
        },
      ],
    },
  ],
  reportes: [
    {
      title: "Reportes",
      icon: BarChart3,
      items: [
        {
          title: "Lotes",
          url: "/reportes/lotes",
        },
        {
          title: "Estado de Reclamos",
          url: "/reportes/est-reclamos",
        },
        {
          title: "Detalle de Reclamos",
          url: "/reportes/detalle-reclamo",
        },
        {
          title: "Detalle de Reclamos Eliminados",
          url: "/reportes/detalle-reclamo-elim",
        },
        {
          title: "Comisiones",
          url: "/reportes/comisiones",
        },
        {
          title: "Lotes por Comisión",
          url: "/reportes/lotes-comision",
        },
        {
          title: "Peritos por Comisión",
          url: "/reportes/peritos-comision",
        },
        {
          title: "Tasadores",
          url: "/reportes/tasadores",
        },
        {
          title: "Peritos por Boletas",
          url: "/reportes/peritos-boletas",
        },
        {
          title: "Ingreso de Tasadores",
          url: "/reportes/ing-tasadores",
        },
        {
          title: "Desglose de Tasadores",
          url: "/reportes/desglose-tas",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const params = useParams({ strict: false });

  const handleFormSelect = (formType: string) => {
    navigate({ to: `/formularios/${formType}` });
  };

  const selectedForm = (params.tipo as FormType) || null;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center flex-row gap-3 group-data-[state=collapsed]:justify-center transition-[padding,justify-content] duration-300 ease-in-out py-4 px-4">
        <img
          src="/logo_cl.png"
          alt="logo"
          className="w-14 h-auto group-data-[state=collapsed]:w-10 transition-all duration-200"
        />

        <div className="flex flex-col group-data-[state=collapsed]:hidden transition-all duration-300 ease-in-out">
          <h1 className="text-md font-semibold">Sistema expropiaciones</h1>
          <h2 className="text-xs font-medium text-muted-foreground">
            Sistema de información expropiaciones
          </h2>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="flex flex-col overflow-hidden p-0">
        {/* Sección 1: Dashboard + Formularios - Con scroll interno */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Dashboard */}
                <SidebarMenuItem className="font-sans font-medium rounded-md transition-colors mb-2">
                  <SidebarMenuButton asChild>
                    <Link to="/dashboard">
                      <Home />
                      <span>Expropiación - DGOP</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Formularios */}
          <SidebarGroup className="pt-0">
            <SidebarGroupContent>
              <NavFormularios
                items={navigationData.formularios}
                onFormSelect={handleFormSelect}
                selectedForm={selectedForm}
              />
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        <SidebarSeparator className="my-2" />

        {/* Sección 2: Reportes - Con scroll interno */}
        <div className="flex-shrink-0 max-h-[40vh] overflow-y-auto px-2 pb-2">
          <SidebarGroup className="pt-0">
            <SidebarGroupContent>
              <NavAdmin items={navigationData.reportes} />
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        <SidebarSeparator className="my-2" />

        {/* Sección 3: Admin - Con scroll interno */}
        <div className="flex-shrink-0 max-h-[40vh] overflow-y-auto px-2 pb-2">
          <SidebarGroup className="pt-0">
            <SidebarGroupContent>
              <NavAdmin items={navigationData.admin} />
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>

      {/* <SidebarFooter>
        <div className="absolute bottom-0 right-5 group-data-[state=collapsed]:hidden">
          <img src="/franja.svg" alt="logo" className="w-full h-full" />
        </div>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
