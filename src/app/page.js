import { CardConponent } from "@/components/mycomponent/CardComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import SearchComponent from "@/components/mycomponent/searchComponent";
 
export default function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full items-center">
          <section className="flex w-full px-10 py-5">
            <SidebarTrigger className={"p-5"} />
            <SearchComponent />
          </section>
          <section className="bg-gray-200 rounded-2xl w-[90%] h-auto">
            <div className="mx-10">
              <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
                Homepage
              </p>
              <hr strokeWidth="h-1  bg-gray-500  mb-20" />
            </div>
            <div className="flex mb-20 flex-wrap">
              <CardConponent />
            </div>
          </section>
        </main>
      </SidebarProvider>
    </>
  );
}
