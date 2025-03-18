import React from "react";
import CardBookComponent from "./_components/CardBookComponent";
import { GetAllBook, GetCatagory } from "@/service/books.service";
import DropDownFilterComponent from "./_components/DropDownFilterComponent";

const BookCatagories = async () => {
  const data = await GetAllBook();
  const catagory = await GetCatagory();
  return (
    <>
      <div className="mx-10">
        <div className="flex justify-between items-center">
          <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
            All Books
          </p>
          <DropDownFilterComponent data={catagory} />
        </div>

        <hr className="h-1  bg-gray-500" />
      </div>
      <CardBookComponent books={data} />
    </>
  );
};

export default BookCatagories;
