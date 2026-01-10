import React from  "react";
import PageSearch from "../components/PageSearch.jsx"
import {useNavigate} from "react-router-dom";
function HeadVegetable(){
    const navigate = useNavigate();
    function handleLogin(){
        navigate("/Login");
    }
    function handleSignup(){
        navigate("/Signup");
    }
    return(
        <header>
            <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural Products Online</h1>
            <div className="flex justify-center">
                <PageSearch/>
            </div>
            <div className="flex flex-wrap justify-end m-2">
                <button className="w-25 m-3 font-bold text-xl rounded bg-green-800 text-white hover:bg-green-700 active:bg-green-600 cursor-pointer" onClick={handleLogin}>Login</button>
                <button className="w-25 m-3 font-bold text-xl rounded bg-green-800 text-white hover:bg-green-700 active:bg-green-600 cursor-pointer" onClick={handleSignup}>Signup</button>
            </div>
        </header>
    )
}
export default HeadVegetable;