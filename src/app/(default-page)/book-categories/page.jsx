import React from "react";
import CardBookComponent from "./_components/CardBookComponent";
import { GetAllBook, GetCatagory } from "@/service/books.service";
import DropDownFilterComponent from "./_components/DropDownFilterComponent";

const BookCatagories = async () => {
  const data = await GetAllBook();
  const catagory = await GetCatagory();
  return (
    <>
 
      <DropDownFilterComponent data={catagory} />
      <CardBookComponent books={data} />
    </>
  );
};

export default BookCatagories;
