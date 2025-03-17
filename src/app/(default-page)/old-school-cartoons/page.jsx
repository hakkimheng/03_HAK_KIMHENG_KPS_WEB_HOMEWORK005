import React from 'react'
import CardCartoonComponent from './_components/CardCartoonComponent';
import { GetAllCartoon } from '@/service/books.service';

const OldScoolCartoonsPage = async () => {
  const cartoon = await GetAllCartoon()
  
  return (
    <CardCartoonComponent
      cartoon = {cartoon}
    />
  )
}

export default OldScoolCartoonsPage;