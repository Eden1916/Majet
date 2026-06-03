import{useEffect, useState} from 'react';
import {ProductGroup} from '../api/ProductGroup.js';
import{useTheme} from "../context/ThemeContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Footer from "../components/Footer.jsx"

function ProductGroups(){
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const {theme} = useTheme();
    const navigate = useNavigate();

    useEffect(()=>{
        ProductGroup(categoryId)
        .then(data=>{setGroups(data)})
        .catch(console.error)
        .finally(()=>setLoading(false));

    }, [categoryId]);

    if(loading){
        return <p className="text-center mt-20 text-lg">Loading product groups...</p>
    }

    if(!groups || groups.length === 0){
      return <p className="text-center mt-20 text-lg">No products available.</p>
    }

    return(
        <>
        <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mx-4 my-5 font-serif">Order Fresh Agricultural Products Online</h1>
        <div className="min-h-screen px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6">
            {(Array.isArray(groups) ? groups : []).map(group => (
              <div key={group._id || group.name} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-full sm:w-64 md:w-56 lg:w-60 flex flex-col border rounded-2xl items-center justify-between gap-3 p-4 transition-transform hover:-translate-y-2 duration-200`}>
                <img src={group.image} alt={group.name} className="w-full h-40 rounded-lg object-cover"/>
                <h2 className="font-semibold text-lg text-center">{group.name}</h2>
                <p className="text-sm text-center capitalize">{group.type}</p>
                <button onClick={() => navigate(`/product-details/${group.product_group}`)} className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"} w-full rounded py-1 font-medium`}>View more</button>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProductGroups;