"use client";

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Profile from "../../Profile/Profile";

export function AppSidebarFooter() {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center gap-3">
        <Profile />
        {state === "expanded" && (
          <div className="flex flex-col">
            <span className="font-medium text-sm">Md Tofaal Ahmed</span>
            <p className="text-xs hover:underline">tofaal91522@gmail.com</p>
          </div>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
