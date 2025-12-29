import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { FileText, Clock, CheckCircle, Users, TrendingUp, TrendingDown } from "lucide-react"

const metrics = [
  {
    title: "Formularios Hoy",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: FileText,
    description: "vs. ayer",
  },
  {
    title: "Esta Semana",
    value: "156",
    change: "+8%",
    trend: "up",
    icon: Clock,
    description: "vs. semana anterior",
  },
  {
    title: "Completados",
    value: "89%",
    change: "+3%",
    trend: "up",
    icon: CheckCircle,
    description: "tasa de completitud",
  },
  {
    title: "Usuarios Activos",
    value: "47",
    change: "-2%",
    trend: "down",
    icon: Users,
    description: "últimas 24h",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={metric.trend === "up" ? "default" : "secondary"} className="text-xs">
                {metric.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {metric.change}
              </Badge>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
