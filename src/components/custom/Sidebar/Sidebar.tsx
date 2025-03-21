"use client";

import * as React from "react";
import {
  BookUser,
  UsersRound,
  House,
  User,
  Calendar,
  BadgeHelp,
  ChartNoAxesColumn,
  ChartPie,
  ChartLine,
  BookOpenText,
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
      title: "Calender",
      url: "/calender",
      icon: Calendar,
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
    {
      title: "Geography Chart",
      url: "/geography-chart",
      icon: BookOpenText,
      isActive: false,
    },
  ],
};

export default function SidebarPage({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        {/* <SidebarHeader> */}
        <NavUser user={data.user} />
        <SidebarContent className="bg-black">
          <SidebarGroup className="text-white">
            <SidebarGroupLabel className="text-white font-bold bg-gray-600">
              About Users
            </SidebarGroupLabel>
            <NavMain items={data.about_user} />
          </SidebarGroup>
          <span className="border-[.5px]"></span>
          <SidebarGroup>
            <SidebarGroupLabel className="text-white font-bold bg-gray-600">
              Services
            </SidebarGroupLabel>
            <NavMain items={data.services} />
          </SidebarGroup>
          <span className="border-[.5px]"></span>

          <SidebarGroup>
            <SidebarGroupLabel className="text-white font-bold bg-gray-600">
              Charts
            </SidebarGroupLabel>
            <NavMain items={data.chart} />
          </SidebarGroup>
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        {/* </SidebarHeader> */}

        <SidebarRail />
      </Sidebar>
    </>
  );
}
