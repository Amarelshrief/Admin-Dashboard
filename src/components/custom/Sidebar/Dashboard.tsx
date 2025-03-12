import SidebarPage from "./Sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "../Header/Header";

export default function Dashboard() {
  return (
    <section className=" h-[4rem] w-full mx-auto pt-2 shadow-xl">
      <div className="flex justify-between items-start">
        <div className=" h-[3rem]">
          <SidebarProvider>
            <div className="flex items-start">
              <SidebarPage />
              <SidebarTrigger className="-mr-4 cursor-pointer hover:bg-black hover:text-white h-10 w-10" />
            </div>
            <Separator orientation="vertical" className="mr-2 h-4" />
          </SidebarProvider>
        </div>
        <div className="w-full">
          <Header />
        </div>
        {/* <div>afasfafasf</div> */}
      </div>
    </section>
  );
}
