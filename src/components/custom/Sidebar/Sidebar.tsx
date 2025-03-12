"use client";

import * as React from "react";
import {
  BookUser,
  UsersRound,
  Rows4,
  House,
  User,
  Calendar,
  BadgeHelp,
  ChartNoAxesColumn,
  ChartPie,
  ChartLine,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: House,
      isActive: true,
    },
    {
      title: "Manage Team",
      url: "#",
      icon: UsersRound,
    },
    {
      title: "Contacts Information",
      url: "#",
      icon: BookUser,
    },
    {
      title: "Invoices Balance",
      url: "#",
      icon: Rows4,
    },
    {
      title: "Profile Form",
      url: "#",
      icon: User,
    },
    {
      title: "Calender",
      url: "/Play-ground",
      icon: Calendar,
      isActive: true,
    },
    {
      title: "FAQ Page",
      url: "#",
      icon: BadgeHelp,
    },
    {
      title: "Bar Chart",
      url: "#",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Pie Chart",
      url: "#",
      icon: ChartPie,
    },
    {
      title: "Line Chart",
      url: "#",
      icon: ChartLine,
    },
  ],
};

export default function SidebarPage({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader> */}
      <SidebarContent className="bg-black">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* </SidebarHeader> */}

      <SidebarRail />
    </Sidebar>
  );
}
