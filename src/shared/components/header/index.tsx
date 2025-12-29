import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
import { Badge } from "@/shared/components/ui/badge"
import { Search, Bell, User, LogOut, Settings } from "lucide-react"
import { SidebarTrigger } from "../ui/sidebar"
import { Separator } from "../ui/separator"
import { useUserProfile } from "@/features/auth/permissions/hooks/useUserProfile"
import { useLogout } from "@/features/auth/logout/hooks/useLogout"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"

export function Header() {
  const navigate = useNavigate()
  const { user, isLoading } = useUserProfile()
  const { logout, isLoading: isLoggingOut } = useLogout()

  const handleLogout = async () => {
    try {
      await logout()
      toast.success("Sesión cerrada exitosamente")
      navigate({ to: "/login" })
    } catch (error) {
      toast.error("Error al cerrar sesión")
      console.error("Error during logout:", error)
    }
  }

  const getInitials = (name: string) => {
    const names = name.split(" ")
    return names
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <header className="h-16 border-b bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Sistema de información expropiaciones</span>
        </div>
      </div>



      {/* Right side */}
      <div className="flex-1 items-center gap-4 flex justify-end">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar formularios..." className="pl-10 bg-background" />
          </div>
        </div>
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge
            variant="outline"
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            3
          </Badge>
        </Button>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full" disabled={isLoading}>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/diverse-user-avatars.png" alt={user?.nombre_completo || "Usuario"} />
                <AvatarFallback>
                  {user?.nombre_completo ? getInitials(user.nombre_completo) : "US"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {isLoading ? "Cargando..." : user?.nombre_completo || "Usuario"}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {isLoading ? "" : user?.correo_electronico || ""}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>{isLoggingOut ? "Cerrando sesión..." : "Cerrar sesión"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
