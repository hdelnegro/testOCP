import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6">
        <div className="w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
