import React from 'react'
import CardCartoonComponent from './_components/CardCartoonComponent';
import { GetAllCartoon, GetCartoonCategory } from '@/service/books.service';
import DropDownFilterComponent from '../book-categories/_components/DropDownFilterComponent';

const OldScoolCartoonsPage = async () => {
  const cartoon = await GetAllCartoon();
  const cartoonCategory = await GetCartoonCategory();
  return (
    <>

          <DropDownFilterComponent
            data={cartoonCategory} />
     
      <CardCartoonComponent
        cartoon={cartoon}
      />
    </>
  )
}

export default OldScoolCartoonsPage;