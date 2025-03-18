"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function CardCartoonComponent({ cartoon }) {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    if(category!== null){
        cartoon = cartoon.filter(cartoon => cartoon.ct_genre_id == category)
    }
    if(search!== null){
        cartoon = cartoon.filter(cartoon => cartoon.ct_title.toLowerCase().includes(search.toLowerCase()))
    }
  return (
    <>
      <section className="overflow-scroll h-180 my-5">
        <div className="flex flex-wrap">
          {cartoon.map((cartoon, index) => (
            <Link
            href={{
              pathname: `/read-full-acticle/${cartoon.id}`,
              query: {
                  type: 'cartoon',
                  name: 'old-school-cartoons',
                  title: cartoon.ct_title
              }
          }}
              key={index}
              className="relative cursor-pointer dark:text-white w-70 h-100 m-20"
            >
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
              <div className="relative p-3 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500 h-103">
                <img className="rounded-md h-95" src={cartoon.image} alt="" />
                <div className="flex flex-col gap-3">
                  <h3 className="pt-8 text-lg font-bold text-gray-900 line-clamp-1">
                    {cartoon.ct_title}
                  </h3>
                  <h3 className="flex gap-2 font-bold items-center text-[#087E8B] text-lg">
                    <span>
                      {" "}
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
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </span>
                    {cartoon.view_count} time |{" "}
                    {cartoon.published_year.substring(0, 4)}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default CardCartoonComponent;
