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
    <Sidebar className={"w-70"}>
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
                    <a href={item.url} className="w-full h-10">
                      <item.icon className="stroke-red-700 !h-6 !w-6" />
                      <span className={`font-medium text-lg ${(pathname === "/" && item.url === "/") || pathname === item.url ? 'text-white' : ''}`}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}        
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-gray-300 py-6">
                      <a href="#" className="w-full h-10 flex justify-center mt-5 bg-gray-200">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="!h-6 !w-6"
                          viewBox="0 0 24 24" 
                          fill="none"
                        >
                          <path 
                            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeMiterlimit="10" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeMiterlimit="10" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-medium text-lg">Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
