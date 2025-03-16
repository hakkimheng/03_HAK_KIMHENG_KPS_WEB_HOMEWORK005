import { Geist, Geist_Mono } from "next/font/google";
import "/Users/macbookpro/HRD /next-js/my-app/src/app/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import SearchComponent from "@/components/mycomponent/searchComponent";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full items-center">
          <section className="flex w-full px-10 py-5">
            <SidebarTrigger className={"p-5"}/>
            <SearchComponent/>
          </section>
          <section className="bg-gray-200 rounded-2xl w-[90%] h-auto">
            {children}
          </section>
        </main>
      </SidebarProvider>
      </body>
    </html>
  );
}
