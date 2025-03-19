"use client";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
const CardBookComponent = ({ books }) => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    if(category !== null){
        books = books.filter(book => book.book_cate_id == category)
    }
    if(search!== null){
        books = books.filter(book => book.book_title.toLowerCase().includes(search.toLowerCase()))
    }
    
    return (
        <> 
            <section className='flex pt-30 justify-center h-180 overflow-scroll my-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40">
                    {books && books.map((book, index) => (
                        <div key={index} className="flex">
                            <div className='flex flex-col'>
                                <div className="md:flex relative h-55 pr-5 bg-white rounded-2xl">
                                    <div className="md:shrink-0 absolute bottom-2 left-2 flex flex-col gap-3">
                                        <img className="h-38 w-full rounded-2xl object-cover md:h-full md:w-42" src={book.image} alt={book.book_title} />
                                        <InteractiveHoverButton >
                                        <Link 
                                            href={{
                                                pathname: `/read-full-acticle/${book.id}`,
                                                query: {
                                                    type: 'book',
                                                    name: 'book-categories',
                                                    title: book.book_title
                                                }
                                            }}
                                        >
                                            <p className='text-sm'>Read Full Acticle</p>
                                        </Link>
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