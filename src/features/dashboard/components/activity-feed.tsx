import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react"

const activities = [
  {
    id: 1,
    user: "Ana García",
    action: "completó",
    target: "Solicitud de Vacaciones",
    time: "hace 2 min",
    icon: CheckCircle,
    iconColor: "text-green-500",
  },
  {
    id: 2,
    user: "Carlos López",
    action: "editó",
    target: "Evaluación de Desempeño",
    time: "hace 15 min",
    icon: FileText,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    user: "María Rodríguez",
    action: "guardó borrador",
    target: "Reporte de Gastos",
    time: "hace 1 hora",
    icon: Clock,
    iconColor: "text-amber-500",
  },
  {
    id: 4,
    user: "Sistema",
    action: "alertó sobre",
    target: "Formularios vencidos",
    time: "hace 2 horas",
    icon: AlertTriangle,
    iconColor: "text-red-500",
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
