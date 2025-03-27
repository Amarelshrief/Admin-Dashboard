import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import SidebarPage from "@/components/custom/Sidebar/Sidebar";
import Header from "@/components/custom/Header/Header";
import { ThemeProvider } from "@/components/custom/Theme/Theme";

export default function DashboardRootLayout() {
  return (
    <section className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-between items-start h-[3rem] w-full shadow-xl">
          <div>
            <SidebarProvider>
              <div className="flex items-start">
                <SidebarPage />
                <SidebarTrigger className="-mr-4 cursor-pointer flex justify-center items-center h-8 w-8 hover:bg-[var(--ring)]" />
              </div>
              <Separator orientation="vertical" className="mr-2 h-4" />
            </SidebarProvider>
          </div>
          <div className="w-full flex flex-col">
            <Header />
            <main className="lg:pt-4 pr-1 mt-12 lg:mt-0">
              <Outlet />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </section>
  );
}
