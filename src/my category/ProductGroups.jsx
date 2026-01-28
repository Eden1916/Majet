import{useEffect, useState} from 'react';
import {ProductGroup} from '../api/ProductGroup.js';
import{useTheme} from "../context/ThemeContext.jsx";

function ProductGroups(){
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(true);
    const {theme} = useTheme();

    useEffect(()=>{
        ProductGroup()
        .then(data=>{setGroups(data)})
        .catch(console.error)
        .finally(()=>setLoading(false));

    }, []);

    if(loading){
        return <p>lodading product groups ...</p>
    }

    return(
        <>
        <h1 className="text-center font-bold text-5xl m-5 font-serif text">Order Fresh Agricultural Online</h1>
    <div className="min-h-screen flex gap-6 p-4">                    
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {groups.map(group => (
          <div key={group._id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-55 h-max-96 flex flex-col border rounded-2xl  items-center justify-between gap-4 transition-transform hover:-translate-y-3 duration-200`}>
            <img src={group.image} alt={group.name} className="w-40 h-30 rounded-lg object-cover m-2"/>
            <h2 className="font-semibold text-lg">{group.name}</h2>
            <p className=" text-lg">Price: {group.price}/kg</p>
            <p>{group.type.charAt(0).toUpperCase() + group.type.slice(1).toLowerCase(0)}</p>
            <button /*onClick={() => goToProductDetail(product.slug)}*/ className={`${theme === "dark" ? "bg-green-600 hover:bg-green-500 active:bg-green-400" : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white"}  rounded mb-5 px-3 py-1`}>View more</button>
          </div>
        ))}
      </div>
      </div></>
    )
}

export default ProductGroups;