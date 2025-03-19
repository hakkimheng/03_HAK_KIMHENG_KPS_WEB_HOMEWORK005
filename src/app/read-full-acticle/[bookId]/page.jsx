import React from 'react'
import BookDetailComponent from '../_components/BookDetailComponent'
import { GetDetail } from '@/service/books.service'


const BookIdPage = async ({ params, searchParams }) => {
  const type = searchParams?.type || null; 
  const data = await GetDetail(params.bookId, type);
  return <BookDetailComponent data={data} />;
};

export default BookIdPage;