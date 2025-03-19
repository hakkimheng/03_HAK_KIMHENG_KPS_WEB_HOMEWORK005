"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

function DropDownFilterComponent({ data }) {
    const [nameCate , setNameCate] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    
    const createQueryString = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.trim()) {
            router.push(`${pathname}?${createQueryString('category', newValue)}`, {
                scroll: false
            });
        }
    };

    return (
        <div className="mx-10">
        <div className="flex justify-between items-center">
          <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
            {
                nameCate == '' ? pathname === "/book-categories" ? "All Book" : "All Cartoon" : nameCate
            }
          </p>
        <div className="w-[200px] text-gray-900 dark:text-gray-100">
            <div className="relative w-full group">
                <button
                    type="button"
                    className="py-2.5 px-3 bg-gray-400 text-white w-full md:text-sm text-site border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded-lg font-semibold"
                >
                    {
                        nameCate? nameCate : pathname === '/book-categories'? 'All Categories' : 'All Genres'
                    }
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </button>
                <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800 border border-dimmed text-xs md:text-sm">
                    {data.map((category, index) => (
                        <button
                            key={index}
                            type="button"
                            value={category.id}
                            onClick={(e) => {
                                handleChange(e);
                                setNameCate(pathname === '/book-categories' ? category.book_cate_name : category.cartoon_genre);
                            }}
                            className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
                        >
                            {pathname === '/book-categories' ? category.book_cate_name : category.cartoon_genre}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </div>
        <hr className="h-1  bg-gray-500" />
      </div>
    );
}

export default DropDownFilterComponent;