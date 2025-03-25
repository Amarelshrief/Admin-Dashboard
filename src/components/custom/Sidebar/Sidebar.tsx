import {
  BookUser,
  UsersRound,
  House,
  User,
  BadgeHelp,
  ChartNoAxesColumn,
  ChartPie,
  ChartLine,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  about_user: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Manage Team",
      url: "/manage-team",
      icon: UsersRound,
      isActive: false,
    },
    {
      title: "Contacts Information",
      url: "/contacts-info",
      icon: BookUser,
      isActive: false,
    },
  ],
  services: [
    {
      title: "Profile Form",
      url: "/profile-form",
      icon: User,
      isActive: false,
    },
    {
      title: "FAQ Page",
      url: "/faq-help",
      icon: BadgeHelp,
      isActive: false,
    },
  ],
  chart: [
    {
      title: "Bar Chart",
      url: "/bar-chart",
      icon: ChartNoAxesColumn,
      isActive: false,
    },
    {
      title: "Pie Chart",
      url: "/pie-chart",
      icon: ChartPie,
      isActive: false,
    },
    {
      title: "Line Chart",
      url: "/line-chart",
      icon: ChartLine,
      isActive: false,
    },
  ],
};

export default function SidebarPage({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <nav>
      <Sidebar collapsible="icon" {...props}>
        {/* <SidebarHeader> */}
        <NavUser user={data.user} />
        <SidebarContent className="bg-[var(--input)]">
          <SidebarGroup className="">
            <SidebarGroupLabel className="font-bold">
              About Users
            </SidebarGroupLabel>
            <NavMain items={data.about_user} />
          </SidebarGroup>
          <span className="border-[.5px] border-gray-600"></span>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              Services
            </SidebarGroupLabel>
            <NavMain items={data.services} />
          </SidebarGroup>
          <span className="border-[.5px] border-gray-600"></span>

          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">Charts</SidebarGroupLabel>
            <NavMain items={data.chart} />
          </SidebarGroup>
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        {/* </SidebarHeader> */}

        <SidebarRail />
      </Sidebar>
    </nav>
  );
}
