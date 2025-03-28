import { Geist, Geist_Mono } from "next/font/google";
import BreadCrumbComponent from "./_components/BreadCrumbComponent";
 
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

    <section className="w-full h-[100vh] bg-gray-200 flex flex-col justify-center items-center pb-10">
      <div className="p-20 self-start">
      <BreadCrumbComponent/>
      </div>
      <section className="bg-white h-200 w-[90%] rounded-3xl">
        {children}
        </section>
      </section>
        
  );
}
