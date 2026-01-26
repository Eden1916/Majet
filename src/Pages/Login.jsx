import React, {useState} from 'react'
import { useTheme } from "../context/ThemeContext.jsx";
import {useNavigate} from "react-router-dom"
import {login} from "../api/auth.js"

function Login(){
    const {theme, toggleTheme} = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
      e.preventDefault();
      setError("");

      try{
        const data = await login(email, password);
        localStorage.setItem("token", data.token);
        navigate("/category");
      } catch(err){
        setError("Invalid email or password");
      }
    }

    return(
        <>
        <button
  onClick={toggleTheme}
  className="w-26 sm:w-36 flex items-center justify-between px-4 py-2 m-3 rounded-full
             bg-linear-to-r from-green-400 to-green-600 
             text-white font-semibold shadow-lg
             hover:from-green-500 hover:to-green-700
             transition-all duration-300"
>
  <span className="flex items-center gap-2">
    {theme === "dark" ? "☀️ Light Mode" :"🌙 Dark Mode"}
  </span>
  <span
    className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
      ${theme === "dark" ? "translate-x-16" : "translate-x-0"}`}
  />
</button>
        <form className={`w-[90%] max-w-[400px] my-10 mx-auto p-3 border rounded-2xl ${theme === "dark" ? "bg-green-500" : "bg-green-400 "}  border-gray-400 box-border`} onSubmit = {handleSubmit}>
          {error && <p className="text-red-600 font-bold block text-center">{error}</p>}
            <h3 className={`text-black font-bold text-4xl text-center mb-4`}>Login</h3>
            <label className=' text-black text-xl font-bold'>Email:</label>
            <input
            value={email}
            type="text"
            id="useremail"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            autoComplete='current email'
            className={`w-full p-2 my-2.5 rounded border text-black border-gray-600 ${ theme === "dark" ? "bg-green-400   focus:bg-green-500": " bg-green-300 focus:bg-green-400"} text-xl  box-border`}
            required
            />
            <label className='text-black text-xl font-bold'>Password:</label>
            <input
            type="password"
            value={password}
            id="password"
            onChange ={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete='current password'
            className={`w-full p-2 my-2.5 rounded border border-gray-600 text-black ${ theme === "dark" ? "bg-green-400 focus:bg-green-500": "bg-green-300 focus:bg-green-400"} text-xl  box-border`}
            required
            />
            <button className={`block w-full max-w-20 my-5 mx-auto rounded font-bold text-xl cursor-pointer text-gray-100 ${theme === "dark" ? "bg-green-700 active:bg-green-600 hover:text-black" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`}>Login</button>
            <p className="block text-center">Don't have an account? <a className="text-blue-600 cursor-pointer" href="/signup">Signup</a></p>
        </form>
        </>
    )
}


export default Login