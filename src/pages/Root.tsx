import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarPage from "@/components/custom/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function RootPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider defaultOpen>
        <SidebarPage />
        <main>
          <SidebarTrigger className="cursor-pointer" />
          {children}
        </main>
      </SidebarProvider>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
