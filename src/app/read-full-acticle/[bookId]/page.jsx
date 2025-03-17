import { GetDetail } from "@/service/books.service";
import BookDetailComponent from "../_components/BookDetailComponent";

// app/dashboard/page.js
const ReadFullActicle = async ( {params} ) => {
  const books = await GetDetail(params.bookId)
  console.log(books);
  return (
    <>
      <BookDetailComponent
          books = {books}
      />
    
     
    </>
  );
}
export default ReadFullActicle;