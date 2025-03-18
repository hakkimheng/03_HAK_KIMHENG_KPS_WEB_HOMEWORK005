"use client";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';
function DropDownFilterComponent({ data }) {
    const router = useRouter
    const [value, setValue] = useState('');
    const pathname = usePathname();
    const handleSummit = (e) => {
        e.preventDefault();
        if(value.trim()) {
            router.push(`${pathname}?category=${encodeURIComponent(value)}`)
        }
    };
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value);
    
    return (

        <form onChange={handleSummit}>
            <div className="w-[200px] text-gray-900 dark:text-gray-100">
                <div className="relative w-full group">
                    <button
                        type="button" // Prevent form submission on button click
                        className="py-2.5 px-3 bg-gray-400 text-white w-full md:text-sm text-site border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded-lg font-semibold"
                    >
                        {value || 'Select a category'}
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
                                type="submit" // Submit the form when a category is clicked
                                name="category"
                                value={category.id} // Set the category value
                                onClick={handleChange}
                                className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
                            >
                                
                                {
                                    pathname === '/book-categories' ? category.book_cate_name : category.cartoon_genre
                                    
                                }
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default DropDownFilterComponent;