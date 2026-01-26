/*import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../data/Products.js";
import {useTheme} from "../context/ThemeContext.jsx"
import {useState} from "react"
import SideBar from "./Side.jsx"
import Footer from "../components/Footer.jsx"

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState("");

  const filtered = Products.filter(p => p.category.toLowerCase() === category.toLowerCase());

  const typeFilter = filtered.filter(p=>{
    if(!type){
      return true
    }
    return p.type === type;
  })

  const uniqeProducts = Array.from(
    new Map(
      typeFilter.map(product=>[product.slug, product])
    ).values()
  )

  function goToProductDetail(slug) {
    navigate(`/product/${slug}`); // Redirect to the product detail page
  }

  const {theme} = useTheme();

  return (
    <>
    <SideBar setType={setType}/>
    <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural {category} Online</h1>
    <div className="min-h-screen flex gap-6 p-4">                    
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {uniqeProducts.map(product => (
          <div key={product.id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-55 h-max-96 flex flex-col border rounded-2xl  items-center justify-between gap-4 transition-transform hover:-translate-y-3 duration-200`}>
            <img src={product.src} alt={product.name} className="w-40 h-30 rounded-lg object-cover m-2"/>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className=" text-lg">Price: {product.price}/kg</p>
            <p>{product.type.charAt(0).toUpperCase() + product.type.slice(1).toLowerCase(0)}</p>
            <button onClick={() => goToProductDetail(product.slug)} className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"}  rounded mb-5 px-3 py-1`}>View Details</button>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
      </>
  );
}*/


import {useEffect, useState} from "react";
import Footer from "../components/Footer.jsx"
import {useTheme} from "../context/ThemeContext.jsx"
import {useNavigate} from "react-router-dom"


const CategoryPage = () =>{
const [categories, setCategorys] = useState([]);
const{theme} = useTheme();
const navigate = useNavigate();

useEffect(()=>{
    fetch("http://localhost:5000/api/categorys", {
      headers:{
        Authorization:"Brearer " + localStorage.getItem("token"),
      }
    })
    .then(res=>res.json())
    .then(data=>{
        setCategorys(data.categories);
    })
    .catch(err=>{
        console.error(err);
    })
}, []);

const logout = () => {
  localStorage.removeItem("token");
  navigate("/login");
}
return(
    <>
          <button className={`block w-full max-w-20 my-5 mx-auto rounded font-bold text-xl cursor-pointer text-gray-100 ${theme === "dark" ? "bg-green-700 active:bg-green-600 hover:text-black" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`} onClick={logout}>Logout</button>
        <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural category Online</h1>
    <div className="min-h-screen flex gap-6 p-4">                    
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {categories?.map(category => (
          <div key={category.id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-55 h-max-96 flex flex-col border rounded-2xl  items-center justify-between gap-4 transition-transform hover:-translate-y-3 duration-200`}>
            <img src={category.src} alt={category.name} className="w-40 h-30 rounded-lg object-cover m-2"/>
            <h2 className="font-semibold text-lg">{category.name}</h2>
            <p className=" text-lg">Price: {category.price}/kg</p>
            <p>{category.type.charAt(0).toUpperCase() + category.type.slice(1).toLowerCase(0)}</p>
            <button /*onClick={() => goToProductDetail(product.slug)}*/ className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"}  rounded mb-5 px-3 py-1`}>View Details</button>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
        </>
)
}

export default CategoryPage;