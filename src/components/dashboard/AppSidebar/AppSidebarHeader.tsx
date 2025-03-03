import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function AppSidebarHeader() {
  const activeTeam = {
    name: "Sms Marketing",
    logo: "/login.webp",
    plan: "Free Plan",
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary cursor-pointer text-sidebar-primary-foreground">
              <Image
                alt="Sms Marketing"
                width={32}
                height={32}
                src={activeTeam.logo}
                className="size-4"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight cursor-pointer">
              <span className="truncate font-semibold">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
