import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/shared/components/ui/sidebar"
import { useLocation, Link } from "@tanstack/react-router"


interface SubItem {
  title: string
  url: string
  icon?: LucideIcon
}

interface NavItem {
  title: string
  url?: string
  icon: LucideIcon
  isActive?: boolean
  items?: SubItem[]
}

export function NavAdmin({
  items,
}: {
  items: NavItem[]
}) {
  const { pathname } = useLocation()


  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Mantenedores</SidebarGroupLabel> */}
      <SidebarGroupContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => {
              const isActiveParent =
                item.url === pathname ||
                item.items?.some((sub) => sub.url === pathname)

              // Renderizar item principal con permisos
              const renderMenuItem = () => (
                <SidebarMenuItem className="font-sans font-medium rounded-md transition-colors" key={item.title}>
                  {item.items ? (
                    <Collapsible defaultOpen={isActiveParent} >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={subItem.url}>
                                  {subItem.icon && <subItem.icon className="size-4" />}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link to={item.url!}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              )

              // Los items ya vienen filtrados por permisos, solo renderizar
              return renderMenuItem()
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroupContent>
    </SidebarGroup >
  )
}
