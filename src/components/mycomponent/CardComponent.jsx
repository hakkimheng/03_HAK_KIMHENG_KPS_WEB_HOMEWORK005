
import Link from "next/link";

const feature = [
    {
        name: "Book",
        image: "https://picfiles.alphacoders.com/142/142976.jpg",
        description: "",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
    },
    {
        name: "Book",
        image: "https://picfiles.alphacoders.com/142/142976.jpg",
        description: "",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
    },
]

export function CardConponent() {
    return (
        <>
            {
                feature.map((items, index) => (
                       <div
                       key={index}
                        className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl h-120 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src={items.image} className="absolute top-0 right-0  z-0 h-full w-full"></img>
                        <span className="absolute top-5 left-5 z-0 h-10 w-10 rounded-full bg-[rgba(0,166,245,0.8)] transition-all duration-300 group-hover:scale-[30]">

                        </span>

                        <div className="relative -top-5 -left-5 z-10 mx-auto max-w-md flex flex-col gap-60">
                            <span className="grid grid-cols-2 h-10 w-25 px-2 placeitems-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400 items-center justify-center">
                                {items.icon}
                                <p className="text-white">Book</p>
                            </span>
                            <section>
                                <div
                                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                                        online.</p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <Link href="/book-categories" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                                            &rarr;
                                        </Link>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                ))
            }


        </>
    );
}


