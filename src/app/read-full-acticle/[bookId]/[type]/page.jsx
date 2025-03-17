import { GetDetail } from "@/service/books.service";
import BookDetailComponent from "../../_components/BookDetailComponent";

const TypePage = async ( {params} ) => {
  const data = await GetDetail(params.bookId , params.type)
  const item = {
    title: (params.type == "book" ? data.book_title : data.ct_title),
    author: (params.type == "book" ? data.book_author : data.ct_creator),
    image: data.image,
    description: (params.type == "book" ? data.description : data.ct_description),
    viewed : (params.type == "book" ? "" : data.view_count),
    date : (params.type == "book" ? "" : data.published_year)
  }
  return (
    <>
      <BookDetailComponent
          data = {item}
      />
    </>
  );
}
export default TypePage;