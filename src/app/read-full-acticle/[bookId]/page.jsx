import React from 'react'
import BookDetailComponent from '../_components/BookDetailComponent'
import { GetDetail } from '@/service/books.service'


const BookIdPage = async ({ params : paramsPromise , searchParams : searchParamsPromise }) => {
  const searchParams = await searchParamsPromise || null;
  const type = await searchParams?.type || null; 
  const params = await paramsPromise || null;
  const data = await GetDetail(params.bookId, type);
  return <BookDetailComponent data={data} />;
};

export default BookIdPage;