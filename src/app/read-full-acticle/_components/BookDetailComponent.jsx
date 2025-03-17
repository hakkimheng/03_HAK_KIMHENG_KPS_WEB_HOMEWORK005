
import React from 'react'

const BookDetailComponent = ({ data }) => {

  return (
    <>
      <section key={data.id} className="w-full h-[100vh] bg-gray-200 flex justify-center items-end pb-10">
        <section className="bg-white h-[80%] w-[90%] rounded-3xl relative">
          <img
            className="w-70 rounded-2xl absolute right-20 -top-30 "
            src={data.image}
            alt={data.title}
          />
          <section className="absolute top-70 px-20 bo overflow-scroll">
            <p className="font-bold text-3xl ">{data.title}</p>
            <p className="font-bold text-xl py-5">by <span className="text-[#087E8B]">{data.author}</span></p>
            {
              data.viewed == "" ? null :
                <h3 className='flex gap-2 font-bold items-center text-[#087E8B] text-lg pb-10'>
                  <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg></span>
                  {data.viewed} time  |  {data.date.substring(0, 4)}
                </h3>
            }
            <p>{data.description}</p>
          </section>
        </section>
      </section>
    </>
  )
}

export default BookDetailComponent