"use client";

import { BookOpen, KeyRound, LayoutDashboard } from "lucide-react";
import * as React from "react";

import { AppSidebarContent } from "@/components/dashboard/AppSidebar/AppSidebarContent";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { AppSidebarFooter } from "./AppSidebarFooter";
import { AppSidebarHeader } from "./AppSidebarHeader";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "API Settings",
      url: "#",
      icon: KeyRound,
      items: [
        {
          title: "API Tokens",
          url: "/dashboard/api-settings/api-tokens",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/doc/introduction",
        },
        {
          title: "API Guide",
          url: "/dashboard/doc/get-started",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <AppSidebarContent items={data.navMain} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
