import React from 'react'
import CardCartoonComponent from './_components/CardCartoonComponent';
import { GetAllCartoon, GetCartoonCategory } from '@/service/books.service';
import DropDownFilterComponent from '../book-categories/_components/DropDownFilterComponent';

const OldScoolCartoonsPage = async () => {
  const cartoon = await GetAllCartoon();
  const cartoonCategory = await GetCartoonCategory();
  return (
    <>
          <div className="mx-10">
        <div className="flex justify-between items-center">
          <p className="p-5 bg-[#bbe6eb] font-bold text-[#087E8B] rounded-2xl inline-block my-5">
            All Books
          </p>
          <DropDownFilterComponent
          data={cartoonCategory} />
        </div>

        <hr className="h-1  bg-gray-500" />
      </div>
      <CardCartoonComponent
      cartoon = {cartoon}
    />
    </>
  )
}

export default OldScoolCartoonsPage;