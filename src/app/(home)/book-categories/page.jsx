
import React from 'react'
import CardBookComponent from './_components/CardBookComponent'
import { GetAllBook } from '@/service/books.service'

const BookCatagories = async () => {
  const data = await GetAllBook();
  return (
    <CardBookComponent
    books = {data}
    />
  )
}

export default BookCatagories


