import { GetBookById } from '@/service/books.service'
import React from 'react'

const BookDetailComponent = ({books}) => {
  console.log(books);
  
  return (
    <>
          <section key={books.id} className="w-full h-[100vh] bg-gray-200 flex justify-center items-end pb-10">
          <section className="bg-white h-[75%] w-[90%] rounded-3xl relative ">
            <img
              className="w-70 rounded-2xl absolute right-20 -top-30 "
              src= {books.image}
              alt={books.book_title}
            />
            <section className="absolute bottom-5 px-20">
      
              <p className="font-bold text-3xl ">{books.book_title}</p>
              <p className="font-bold text-xl py-5">by <span className="text-[#087E8B]">{books.book_author}</span></p>
              <p>{books.description}</p>
            </section>
          </section>
        </section>
    </>
  )
}

export default BookDetailComponent