export const GetAllBook = async () => {
    try{
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/book"
        )
        const {payload} = await rs.json()
        return payload;
    }catch(e){
        console.log(e)
    }
}

export const GetCatagory = async () => {
    try {
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/book_category"
        )
        const {payload} = await rs.json()
        return payload;
    }catch(e){
        console.log(e)
    }
}

export const GetAllCartoon = async () => {
    try {
        const rs = await fetch(
        "https://nextjs-homework005.vercel.app/api/cartoon"
        )
        const {payload} = await rs.json()
        return payload;
    }catch(e){
        console.log(e)
    }
}
export const GetCartoonCategory = async () => {
    try {
        const rs = await fetch(
            "https://nextjs-homework005.vercel.app/api/cartoon_genre"
        )
        const {payload} = await rs.json()
        return payload;
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
