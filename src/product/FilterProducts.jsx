import {useState} from "react"
import SideBar from "./SideBar.jsx"
export default function FilterProducts({Products, onFilter}){

    const [filtereditem, setFiltereditem] = useState(Products);
    const handleFilter =(filters)=>{
       let items = [...Products]
       if(filters.priceRange){
        const [min, max] = filters.priceRange;
        if (min!== null){
            items = items.filter(p => p.price >= min);
        }
        if(max!== null){
            items = items.filter(p => p.price <= max);
        }
        /*if (priceRange[0] !== null && p.price < priceRange[0]) {
         items = p.price >= priceRange[0];          }
          if (priceRange[1] !== null && p.price > priceRange[1]) {
            items = p.price<=priceRange[1];
          }
        items = items.filter(
            p => p.price>= filters.priceRange[0] && p.price<=filters.priceRange[1]
        );*/
       }
       if(filters.location){
        items = items.filter(
            p=> p.location.toLowerCase().includes(filters.location.toLowerCase())
        )
       }
       if(filters.rating>0){
        items = items.filter(p=>p.rating>=filters.rating)
       }

       if(filters.sortOpition === "priceLowHigh"){
        items.sort((a,b)=>a.price - b.price)
       }
       if(filters.sortOpition==="popularity"){
        items.sort((a,b)=> b.rating - a.rating)
       }
       if(filters.sortOpition === "newArrival"){
        items.sort((a,b)=>new Date(b.date) - new Date(a.date))
       }
       setFiltereditem(items)

        onFilter(items);
    }


    return(
        <div>
        <SideBar onFilterChange = {handleFilter}/>
       </div>)}