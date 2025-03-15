import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import SidebarPage from "@/components/custom/Sidebar/Sidebar";
import Header from "@/components/custom/Header/Header";

export default function DashboardRootLayout() {
  return (
    <section className=" ">
      <div className="flex justify-between items-start h-[4rem] w-full mx-auto pt-2 shadow-xl">
        <div className=" h-[3rem]">
          <SidebarProvider>
            <div className="flex items-start">
              <SidebarPage />
              <SidebarTrigger className="-mr-4 cursor-pointer hover:bg-black hover:text-white h-10 w-10" />
            </div>
            <Separator orientation="vertical" className="mr-2 h-4" />
          </SidebarProvider>
        </div>
        <div className="w-full flex flex-col">
          <Header />
          <main className="w-full mt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
}
