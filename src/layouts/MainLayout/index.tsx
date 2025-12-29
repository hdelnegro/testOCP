// import Header from '@/shared/components/ui/Header';
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/shared/components/header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col max-w-dvw">
      <div className="flex-1 sidebar-container">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <Outlet />
          </SidebarInset>
        </SidebarProvider>
      </div>
      <Toaster />
    </div>
  );
}
