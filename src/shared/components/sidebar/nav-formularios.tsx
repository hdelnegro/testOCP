import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator
} from "@/shared/components/ui/sidebar"
import type { NavFormulariosProps } from "./types"

// Función recursiva para verificar si un item o sus hijos están activos
function hasActiveChild(item: any, selectedForm: any): boolean {
  if (item.value === selectedForm) return true
  if (!item.items) return false
  return item.items.some((sub: any) => hasActiveChild(sub, selectedForm))
}

// Componente recursivo para renderizar subitems
function RenderSubItems({ items, onFormSelect, selectedForm, level = 0 }: any) {
  return (
    <SidebarMenuSub className="gap-1 py-2">
      {items.map((subItem: any) => {
        const isSelected = selectedForm === subItem.value
        const hasChildren = subItem.items && subItem.items.length > 0
        const isActiveParent = hasActiveChild(subItem, selectedForm)

        return (
          <SidebarMenuSubItem key={subItem.title}>
            {hasChildren ? (
              <Collapsible
                defaultOpen={isActiveParent}
                className="group/nested-collapsible"
              >
                <CollapsibleTrigger asChild>
                  <SidebarMenuSubButton className="font-medium">
                    {subItem.icon && <subItem.icon className="size-4" />}
                    <span>{subItem.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/nested-collapsible:rotate-90" />
                  </SidebarMenuSubButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <RenderSubItems
                    items={subItem.items}
                    onFormSelect={onFormSelect}
                    selectedForm={selectedForm}
                    level={level + 1}
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarMenuSubButton
                asChild
                isActive={isSelected}
              >
                <button
                  onClick={() => subItem.value && onFormSelect(subItem.value)}
                  className="w-full text-left"
                >
                  {subItem.icon && <subItem.icon className="size-4" />}
                  <span>{subItem.title}</span>
                </button>
              </SidebarMenuSubButton>
            )}
          </SidebarMenuSubItem>
        )
      })}
    </SidebarMenuSub>
  )
}

export function NavFormularios({ items, onFormSelect, selectedForm }: NavFormulariosProps) {
  return (
    <SidebarMenu className="gap-3">
      {items.map((item, index) => {
        const isActiveParent = hasActiveChild(item, selectedForm)

        return (
          <div key={item.title}>
            {index > 0 && <SidebarSeparator className="my-2" />}
            <Collapsible
              asChild
              defaultOpen={isActiveParent}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {item.items ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title} className="font-medium">
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <RenderSubItems
                        items={item.items}
                        onFormSelect={onFormSelect}
                        selectedForm={selectedForm}
                        level={0}
                      />
                    </CollapsibleContent>
                  </>
                ) : (
                  <SidebarMenuButton
                    asChild
                    isActive={selectedForm === item.value}
                    tooltip={item.title}
                  >
                    <button
                      onClick={() => item.value && onFormSelect(item.value)}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            </Collapsible>
          </div>
        )
      })}
    </SidebarMenu>
  )
}
