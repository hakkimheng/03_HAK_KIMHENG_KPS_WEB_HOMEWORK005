import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import React from 'react'
import DropDownFilterComponent from './DropDownFilterComponent'
import { GetCatagory } from '@/service/books.service'

const CardBookComponent = async ({ books }) => {
    const catagory = await GetCatagory()

    return (
        <>
            <div className="mx-10">
                <div className='flex justify-between items-center'>
                <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
                    All Books
                </p>
                <DropDownFilterComponent 
                data = {catagory}
                />
                </div>

                <hr class="h-1  bg-gray-500" />
            </div>
            <section className='flex pt-30 justify-center h-200 overflow-scroll my-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40">
                    {books.payload && books.payload.map((book, index) => (
                        <div key={index} className="flex">
                            <div className='flex flex-col'>
                                <div className="md:flex relative h-55 pr-5 bg-white rounded-2xl">
                                    <div className="md:shrink-0 absolute bottom-2 left-2 flex flex-col gap-3">
                                        <img className="h-38 w-full rounded-2xl object-cover md:h-full md:w-42" src={book.image} alt={book.book_title} />
                                        <InteractiveHoverButton >
                                            <a href={`/read-full-acticle/${book.id}`}>read full article</a>
                                    
                                            </InteractiveHoverButton>
                                    </div>
                                    <div className="pt-5 w-120 rounded-2xl pl-50">
                                        <div className="uppercase tracking-wide text-lg line-clamp-1 text-indigo-500 font-semibold">{book.book_title}</div>
                                        <p className="mt-2 text-slate-500 line-clamp-6">
                                            {book.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CardBookComponent