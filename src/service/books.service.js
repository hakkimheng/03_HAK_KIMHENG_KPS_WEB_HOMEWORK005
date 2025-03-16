export const GetAllBook = async () => {
    try{
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/book"
        )
        const data = await rs.json()
        return data;
    }catch(e){
        console.log(e)
    }
}

export const GetCatagory = async () => {
    try {
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/book_category"
        )
        const data = await rs.json()
        return data;
    }catch(e){
        console.log(e)
    }
}