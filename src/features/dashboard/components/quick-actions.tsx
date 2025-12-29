import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { Clock, Star, Search, Download } from "lucide-react"

const quickActions = [
  // {
  //   title: "Nuevo Formulario",
  //   description: "Crear formulario desde plantilla",
  //   icon: Plus,
  //   variant: "default" as const,
  // },
  {
    title: "Continuar Borrador",
    description: "Formularios guardados",
    icon: Clock,
    variant: "secundario" as const,
  },
  {
    title: "Favoritos",
    description: "Acceso rápido",
    icon: Star,
    variant: "secundario" as const,
  },
  {
    title: "Búsqueda Avanzada",
    description: "Filtros y criterios",
    icon: Search,
    variant: "secundario" as const,
  },
  {
    title: "Exportar Datos",
    description: "Excel, PDF, CSV",
    icon: Download,
    variant: "secundario" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {quickActions.map((action) => (
            <Button key={action.title} variant={action.variant} className="justify-start h-auto p-4">
              <div className="flex items-center gap-3 w-full">
                <action.icon className="h-5 w-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
