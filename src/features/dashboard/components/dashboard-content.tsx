import { ActivityFeed } from "./activity-feed"
import { MetricsCards } from "./metrics-cards"
import { QuickActions } from "./quick-actions"
import { LotesPorEtapasTable } from "./lotes-por-etapas-table"
import { TopFormsChart } from "./top-forms-chart"

export function DashboardContent() {
  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Bienvenido al sistema de expropiación - DGOP</h1>
          <p className="text-muted-foreground text-pretty">
            Sistema expropiaciones
          </p>
        </div>
        <div className="flex gap-2">
          {/* <Button>
            <FileText className="w-4 h-4 mr-2" />
            Nuevo Formulario
          </Button> */}
        </div>
      </div>

      {/* Metrics Cards */}
      <MetricsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts and Tables */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Forms Table */}
          <LotesPorEtapasTable />

          {/* Top Forms Chart */}
          <TopFormsChart />
        </div>

        {/* Right Column - Activity and Quick Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Activity Feed */}
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}
