import { CardConponent } from "@/components/mycomponent/CardComponent";


export default function Home() {
  return (
    <>
   <div className="mx-10">
   <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
            Homepage
          </p>
          <hr class="h-1  bg-gray-500  mb-20" />
   </div>
        <div className="flex mb-20 flex-wrap">
          <CardConponent />
        </div>

    </>
  );
}
