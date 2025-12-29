import { DashboardContent } from '@/features/dashboard/components/dashboard-content'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <DashboardContent />
    </main>
  )
}