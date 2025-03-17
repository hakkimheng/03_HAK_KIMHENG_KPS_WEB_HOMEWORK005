"use client"
import { useState } from 'react'

function DropDownFilterComponent({ data }) {
    const [value, setValue] = useState('');
    return (
        <div>
            <div class="w-[200px] text-gray-900 dark:text-gray-100">
                <div class="relative w-full group">
                    <button class="py-2.5 px-3 bg-gray-400 text-white  w-full md:text-sm text-site border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded-lg font-semibold">
                        Select a catagory
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
                    {

                        data.payload.map((catagoty, index) => (
                            <button key={index}
                                onClick={() => setValue(catagoty.book_cate_name)}
                                class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                {catagoty.book_cate_name}
                            </button>

                            ))
                    }      
                       </div>


                </div>
            </div>
        </div>

        
    )
}

export default DropDownFilterComponent