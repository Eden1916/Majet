export const getProductDetail = async(product_group)=>{
    const token = localStorage.getItem("token");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product-details/group/${product_group}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
    if(!res.ok){
        throw new Error("Failed to fetch product details");
    }
    return res.json();
}