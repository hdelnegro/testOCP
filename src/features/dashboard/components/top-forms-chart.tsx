import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shared/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Solicitud Vacaciones",
    completados: 45,
    pendientes: 8,
  },
  {
    name: "Evaluación Desempeño",
    completados: 38,
    pendientes: 12,
  },
  {
    name: "Reporte Gastos",
    completados: 32,
    pendientes: 5,
  },
  {
    name: "Solicitud Equipo",
    completados: 28,
    pendientes: 7,
  },
  {
    name: "Feedback Cliente",
    completados: 24,
    pendientes: 3,
  },
]

export function TopFormsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lotes por etapas</CardTitle>
        <CardDescription>Top 5 formularios por volumen de uso esta semana</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            completados: {
              label: "Completados",
              color: "hsl(var(--chart-1))",
            },
            pendientes: {
              label: "Pendientes",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={60} interval={0} />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="completados" fill="#0F69C4" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pendientes" fill="#003B8D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
