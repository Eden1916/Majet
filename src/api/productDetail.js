export const getProductDetail = async(groupId)=>{
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5000/api/product-details/${groupId}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
    if(!res.ok){
        throw new Error("Failed to fetch product details");
    }
    return res.json();
}