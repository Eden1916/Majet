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
return <p className="text-center mt-20 text-lg">Loading categories...</p>
}

if(categories.length ===0){
  return <p className="text-center mt-20 text-lg">No categories available.</p>
}
return(
    <>
      <div className="flex justify-end px-4 pt-4">
        <button className={`px-4 py-2 rounded font-bold text-base cursor-pointer text-gray-100 ${theme === "dark" ? "bg-green-700 active:bg-green-600 hover:text-black" : "bg-green-600 hover:bg-green-700 active:bg-green-500"}`} onClick={logout}>Logout</button>
      </div>
      <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mx-4 my-5 font-serif">Order Fresh Agricultural Products Online</h1>
      <div className="min-h-screen flex flex-col items-center gap-6 px-4 py-6">
        {(Array.isArray(categories) ? categories : []).map(category => (
          <div key={category._id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-full max-w-2xl flex flex-col sm:flex-row border rounded-2xl items-center gap-4 p-4 transition-transform hover:-translate-y-1 duration-200`}>
            <img src={category.image} alt={category.name} className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover flex-shrink-0"/>
            <div className="flex flex-col items-center sm:items-start gap-2 flex-1 text-center sm:text-left">
              <h2 className="font-semibold text-xl">{category.name}</h2>
              <p className="text-base">{category.description}</p>
              <button onClick={() => navigate(`/product-groups/${category._id}`)} className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"} rounded px-4 py-1 mt-1`}>View Details</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
)
}

export default CategoryPage;