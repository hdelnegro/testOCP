import { createFileRoute, Outlet } from '@tanstack/react-router'
import { z } from 'zod'

const formularioSearchSchema = z.object({
  tipo: z.string().optional(),
})

export const Route = createFileRoute('/_authenticated/formularios')({
  component: FormulariosLayout,
  validateSearch: formularioSearchSchema,
})

function FormulariosLayout() {
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
