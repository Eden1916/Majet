export const getProductDetail = async(product_group)=>{
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5000/api/product-details/group/${product_group}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
    if(!res.ok){
        throw new Error("Failed to fetch product details");
    }
    return res.json();
}