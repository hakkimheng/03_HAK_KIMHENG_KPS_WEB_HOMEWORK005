"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function BreadCrumbComponent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const title = searchParams.get("title");
  return (
    <nav aria-label="breadcrumb">
      <ul className="flex flex-wrap space-x-3 text-sm font-medium">
        <li className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-1 text-gray-800">
            <svg
              className="group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-lg font-bold hover:text-[#087E8B] ">Home</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <div
            aria-hidden="true"
            className="h-4 w-px rotate-12 rounded-full bg-red-300"
          ></div>
          <Link
            href={`/${name}`}
            className="flex items-center space-x-1 text-gray-800"
          >
            <svg
              className="group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-lg font-bold hover:text-[#087E8B] ">{name}</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3" aria-current="page">
          <div
            aria-hidden="true"
            className="h-4 w-px rotate-12 rounded-full bg-red-300"
          ></div>

          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="text-red-400 font-bold text-lg">{title}</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default BreadCrumbComponent;
