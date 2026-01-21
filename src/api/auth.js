const API_URL = "http://localhost:5000/api/auth";

export const login = async (email, password) =>{
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
    });
    if(!res.ok){
        throw new Error("Login failed!");
    }
    return res.json();
}

export const getMe = async() =>{
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/me`, {
        headers:{
            Authorization: "Bearer " + token,
        },
    });

    if(!res.ok){
        throw new Error("Not authorized");
    };
    return res.json();
}