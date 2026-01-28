export const ProductGroup = async ()=>{
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/product-groups", {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
    if(!res.ok){
        throw new Error("Failed to fetch product groups");
    }
    return res.json();
}