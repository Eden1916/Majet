export const categorys = async() => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/categories", {
        headers:{
            Authorization: `Bearer ${token}`,
        },

    })
    if(!res.ok){
        throw new Error("Failed to fetch categories");
    }
    return res.json();
}