import {useState, useEffect, useRef} from 'react'
import {useTheme} from '../context/ThemeContext.jsx';

export default function ProductFilter({onFilterChange}){
    const {theme} = useTheme();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [productType, setProductType] = useState('');
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState('0');
    const [sortOpition, setSortOpition] = useState('priceLowHigh');
    const [filterLocation, setFilterLocation] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const locationSuggestionRef = useRef(null);

    const locations = [
        "Addis Ababa",
        "DireDawa",
        "Harar",
        "Mekele",
        "Bahir Dar",
        "Arba Minch",
        "Gonder",
        "Jigjiga",
        "Jimma",
        "Hawassa",
    ]

    useEffect(()=>{
        function HandleClickOutSide(e){
            if(locationSuggestionRef.current && !locationSuggestionRef.current.contains(e.target)){
                setShowSuggestion(false);
            }
        }
                document.addEventListener("mousedown", HandleClickOutSide);
                return()=> document.removeEventListener("mousedown", HandleClickOutSide);
            }, []);
        

    useEffect(()=>{
        onFilterChange({priceRange, productType, location, rating, sortOpition})
    }, [priceRange, productType, location, rating, sortOpition]);
            return(
                <div className={`p-4 border border-gray-300 rounded-lg m-3 ${theme === "dark" ? "bg-gray-950" : "bg-gray-400"}`}>
                    <div className="flex flex-col gap-2 w-full relative z-50">
                        <label
                        className={`font-semibold ${theme === "dark"? "text-white": "text-black"}`}>Price Range</label>
                        <input 
                        className="p-2 border rounded-md m-3 bg-white text-black"
                        type='number'
                        value={priceRange[0]}
                        onChange={(e)=>setPriceRange([Number(e.target.value), priceRange[1]])}
                        placeholder='Min'
                        />
                        <input
                        className="p-2 border rounded-md m-3 bg-white text-black"
                        type="number"
                        value={priceRange[1]}
                        onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])}
                        placeholder='Max'
                        />
                        </div>

                        <div className="flex flex-col gap-2 w-full relative z-50">
                            <label className={`font-semibold ${theme === "dark"? "text-white": "text-black"}`}>Product Type</label>
                            <select
                            className="p-2 border rounded-md bg-white text-black"
                            value={productType}
                            onChange={(e)=>setProductType(e.target.value)}>
                            <option value="">All</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="non-seasonal">Non-Seasonal</option>
                            </select>
                        </div>
                        <div className="relative" ref={locationSuggestionRef}>
                            <label className={`font-semibold ${theme === "dark"? "text-white": "text-black"}`}>Location</label>
                            <input
                            className="p-2 border rounded-md m-3 bg-white text-black"
                            type="text"
                            value={location}
                            onChange={(e)=>{
                                const userinput = e.target.value;
                                setLocation(userinput);

                                const filtered = locations.filter(loc=>
                                    loc.toLowerCase().includes(userinput.toLowerCase()));

                                    setFilterLocation(filtered);
                                    setShowSuggestion(true);
                                }}
                                placeholder="Enter Location"
                                onFocus={()=>setShowSuggestion(true)}
                                />                                
                                {showSuggestion && filterLocation.length > 0 && (
                                    <ul
                                      className={`absolute w-full overflow-auto mt-p pl-0 z-1000 border rounded-xl list-none h-auto ${theme === "dark" ? "bg-gray-500 text-white border-gray-200" : "bg-gray-300 text-gray-950 border-gray-500"}`}>
                                        {filterLocation.map((loc, index) =>(
                                            <li
                                            key={index}
                                            className="p-2 cursor-pointer hover:bg-gray-50"
                                        onMouseDown={()=>{
                                            setLocation(loc);
                                            setShowSuggestion(false);
                                        }}
                                            >
                                            {loc}
                                            </li>
                                        
                                        ))}
                                      </ul>
                                    )}
                        </div>
                        <div  className="flex flex-col gap-2 w-full relative z-50">
                            <label className={`font-semibold ${theme === "dark"? "text-white": "text-black"}`}>Rating</label>
                            <select
                            className="p-2 border rounded-md bg-white text-black"
                            value={rating} 
                            onChange={(e)=>setRating(Number(e.target.value))

                            }>
                                <option value="">All</option>
                                <option value="1">1 star & up</option>
                                <option value="2">2 star & up</option>
                                <option value="3">3 star & up</option>
                                <option value="4">4 star & up</option>
                                <option value="5">5 star & up</option>
                                </select>
                        </div>
                        <div  className="flex flex-col gap-2 w-full">
                            <label className={`font-semibold ${theme === "dark"? "text-white": "text-black"}`}>Sort By</label>
                            <select 
                            className="p-2 border rounded-md bg-white text-black"
                            value={sortOpition} 
                            onChange={(e)=>setSortOpition(e.target.value)
                            }>
                            <option value="priceLowHigh">Price: Low-High</option>
                            <option value="popularity">Popularity</option>
                            <option value="newArrivals">New Arrivals</option>
                            </select>
                        </div>


                    </div>
            )
}
