import { AppSidebar } from "@/components/dashboard/AppSidebar/AppSidebar";
import SidebarNavbar from "@/components/dashboard/SidebarNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarNavbar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}