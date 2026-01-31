import{useEffect, useState} from 'react';
import {ProductGroup} from '../api/ProductGroup.js';
import{useTheme} from "../context/ThemeContext.jsx";
import {useNavigate, useParams} from "react-router-dom";

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
        return <p>lodading product groups ...</p>
    }

    if(!groups || groups.length === 0){
      return <p>No product available</p>
    }

    return(
        <>
        <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural Online</h1>
    <div className="min-h-screen flex gap-6 p-4">                    
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {(Array.isArray(groups)? groups :[]).map(group => (
          <div key={group._id || group.name} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-55 h-max-96 flex flex-col border rounded-2xl  items-center justify-between gap-4 transition-transform hover:-translate-y-3 duration-200`}>
            <img src={group.image} alt={group.name} className="w-40 h-30 rounded-lg object-cover m-2"/>
            <h2 className="font-semibold text-lg">{group.name}</h2>
            <p>{group.type?.charAt(0).toUpperCase() + group.type?.slice(1).toLowerCase()}</p>
            <button onClick={() => {navigate(`/product-details/${group.product_group}`);}} className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"}  rounded mb-5 px-3 py-1`}>View more</button>
          </div>
        ))}
      </div>
      </div></>
    )
}

export default ProductGroups;