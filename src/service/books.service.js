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

export const GetAllCartoon = async () => {
    try {
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/cartoon"
        )
        const data = await rs.json()
        return data;
    }catch(e){
        console.log(e)
    }
}

export const GetDetail = async (id , type) => {

    let rs;
    try {
        if(type === "book"){
            rs = await fetch(
                `https://nextjs-homework005.vercel.app/api/book/${id}`
            )
        }
        if(type === "cartoon"){
            rs = await fetch(
                `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
            )
        }
        const {payload} = await rs.json()    
        return payload;
    } catch(e) {
        console.log(e)

    }
}
