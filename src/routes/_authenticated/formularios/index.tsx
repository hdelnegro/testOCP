import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/shared/components/ui/card'
import { FolderOpen } from 'lucide-react'

export const Route = createFileRoute('/_authenticated/formularios/')({
  component: FormulariosIndex,
})

function FormulariosIndex() {
  return (
    <Card className="w-full border-1 border-[#0F69C4]">
      <CardContent className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <FolderOpen className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-foreground">Selecciona un formulario</p>
          <p className="text-sm text-muted-foreground max-w-md">
            Elige el tipo de formulario que necesitas completar desde el menú lateral
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
