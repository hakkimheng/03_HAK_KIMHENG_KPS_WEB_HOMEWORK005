"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { bars } from "@/data/SideBarData"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const pathname = usePathname() || "/";

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroup>
            <section className="flex flex-col items-center ">
              <img className="rounded-full p-5" src="https://i.pinimg.com/736x/27/4b/b7/274bb7f9abb400cf1161be5a167fb04d.jpg" alt="" />
              <p className="font-bold text-2xl">Hak Kimheng</p>
              <p className="text-lg">hakkimheng@gmail.com</p>
            </section>
          </SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={"p-4"}>
              {bars.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-gray-300 py-6 ${(pathname === "/" && item.url === "/") || pathname === item.url ? 'bg-gray-600' : ''}`}>
                    <a href={item.url} className="w-50 h-10">
                      <item.icon className="stroke-red-700 !h-6 !w-6" />
                      <span className={`font-medium text-lg ${(pathname === "/" && item.url === "/") || pathname === item.url ? 'text-white' : ''}`}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
