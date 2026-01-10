import {useState, useEffect, useRef} from 'react'
import {useTheme} from "../context/ThemeContext.jsx";
export default function Filter({onFilterChange}){
    const [priceRange, setPriceRange] = useState([null,null]);
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");
    const [sortOpition, setSortOpition] = useState("priceLowHigh");
    const [filterLocation, setFilteredLocation] = useState([]);
    const [showSuggestion, setShowSuggestion] =useState(false);
    const locationSuggestionRef = useRef(null);
    const {theme} = useTheme();

    const locations = [
        "Addis ababa",
        "DireDawa",
        "Harar",
        "Mekele",
        "Bahir Dar",
        "Hawassa",
        "Arba Minch"
    ]

    useEffect (()=>{
        function handleSuggestion(e){
            if(locationSuggestionRef.current && !locationSuggestionRef.current.contains(e.target)){
                setShowSuggestion(false);
            }
        }
        document.addEventListener("mousedown", handleSuggestion)
        return()=> document.removeEventListener("mousedown",handleSuggestion);

    }, []);

    useEffect(()=>{
        onFilterChange({priceRange, location, rating, sortOpition})
}, [priceRange, location, rating, sortOpition]);

const inputStyle =
theme === "dark"
  ? "bg-gray-800 text-gray-100 border-gray-600 placeholder-gray-400 focus:ring-indigo-500"
  : "bg-white text-gray-900 border-gray-300 placeholder-gray-500 focus:ring-indigo-500";

  const cardBg =
    theme === "dark"
      ? "bg-gray-900 text-gray-100 border-gray-700"
      : "bg-gray-100 text-gray-900 border-gray-300";

      const dropdownStyle =
    theme === "dark"
      ? "bg-gray-800 text-gray-100 border-gray-600"
      : "bg-white text-gray-900 border-gray-300";

return(
    <div className={`p-5 m-3 rounded-xl border shadow-md w-full max-w-md ${cardBg}`}>
        <h2 className="font-bold text-2xl text-center p-2">Refine Results</h2>
        <div className="flex flex-col gap-2 w-full relative z-50 m-2">
            <label className="w-full font-semibold">Price Range</label>
            <div>
            <input
            type="number"
            value={priceRange[0] ?? ""}
            onChange={(e)=>setPriceRange([(e.target.value) === "" ? null : Number(e.target.value),priceRange[1]])}
            placeholder="enter minimum price"
            className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${inputStyle}`}
            />
            </div>
            <div>
            <input
            type="number"
            value={priceRange[1] ?? ""}
            onChange={(e)=>setPriceRange([priceRange[0], (e.target.value) === "" ? null : Number(e.target.value)])}
            placeholder="enter maximum price"
            className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${inputStyle}`}
            />
            </div>
            </div>
            <div className="relative flex flex-col m-2" ref={locationSuggestionRef}>
            <label className="w-full font-semibold">Location</label>
            <input
            type="text"
            value={location}
            placeholder="filter by location"
            className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${inputStyle}`}
            onChange={(e)=>{
                const userinput = e.target.value;
                setLocation(userinput)

                const Filtered = locations.filter(loc=>
                    loc.toLowerCase().includes(userinput.toLowerCase())
                )
                    setFilteredLocation(Filtered);
                    setShowSuggestion(true);
                }}
                onFocus={()=>setShowSuggestion(true)}
            />
            {showSuggestion && filterLocation.length>0 &&(
                   <ul
                   className={`absolute top-full mt-1 w-full max-h-40 overflow-y-auto rounded-md border shadow-lg z-50 ${dropdownStyle}`}>
                   {filterLocation.map((loc, index)=>(
                        <li
                        key={index}
                        className="px-3 py-2 cursor-pointer hover:bg-indigo-500 hover:text-white transition"
                        onMouseDown={()=>{
                            setLocation (loc);
                            setShowSuggestion(false);
                        }}
                        >
                            {loc}
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <div className="m-2">
                <label className="w-full font-semibold flex felx-col">Rating</label>
                <select
                value={rating}
                onChange={(e)=>setRating(Number(e.target.value))}
                className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${inputStyle}`}>
                <option value="">All</option>
                    <option value="1">1 star & above</option>
                    <option value="2">2 stars & above</option>
                    <option value="3">3 stars & above</option>
                    <option value="4">4 stars & above</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            <div className="m-2">
                <label className="w-full font-semibold flex flex-col">Sort By</label>
                <select
          className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${inputStyle}`}
          value={sortOpition}
                onChange = {(e)=>setSortOpition(e.target.value)}
                >
                    <option value="priceLowHigh">Price Low - High</option>
                    <option value="poopularity">Popularity</option>
                    <option value="newArrival">New Arrival</option>
                </select>

            </div>

    </div>
)
    
}