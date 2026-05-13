export const ProductGroup = async (categoryId)=>{
    const token = localStorage.getItem("token");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product-groups/category/${categoryId}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
    if(!res.ok){
        throw new Error("Failed to fetch product groups");
    }
    return res.json();
}