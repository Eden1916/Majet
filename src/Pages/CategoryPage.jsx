import {useEffect, useState} from "react";
import Footer from "../components/Footer.jsx"
import {useTheme} from "../context/ThemeContext.jsx"
import {useNavigate} from "react-router-dom"
import {categorys} from "../api/categorys.js"


const CategoryPage = () =>{
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);
const{theme} = useTheme();
const navigate = useNavigate();


const logout = () => {
  localStorage.removeItem("token");
  navigate("/login");
}

useEffect(()=>{

  categorys()
  .then(data=>{setCategories(data)})
  .catch(console.error)
  .finally(()=>setLoading(false));

}, []);

if(loading){
return <p>Loading product groups...</p>
}

if(categories.length ===0){
  return <p className="text-center mt-10">No product groups available.</p>
}
return(
    <>
          <button className={`block w-full max-w-20 my-5 mx-auto rounded font-bold text-xl cursor-pointer text-gray-100 ${theme === "dark" ? "bg-green-700 active:bg-green-600 hover:text-black" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`} onClick={logout}>Logout</button>
        <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural category Online</h1>
    <div className="min-h-screen flex gap-6 p-4">                    
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {(Array.isArray(categories)?categories:[])?.map(category => (
          <div key={category._id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-155 h-max-96 flex flex-col border rounded-2xl  items-center justify-between gap-4 transition-transform hover:-translate-y-3 duration-200`}>
            <img src={category.image} alt={category.name} className="w-40 h-30 rounded-lg object-cover m-2"/>
            <h2 className="font-semibold text-lg">{category.name}</h2>
            <p className=" text-lg text-center">{category.description}</p>
            <button onClick={() => navigate(`/product-groups/${category._id}`)} className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"}  rounded mb-5 px-3 py-1`}>View Details</button>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
        </>
)
}

export default CategoryPage;