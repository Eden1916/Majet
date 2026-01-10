import {useState, useEffect, useRef} from 'react';
import Category from "../my category/CategoryPage.jsx";
import { useTheme } from '../context/ThemeContext.jsx';

function Sidebar({onFilterChange}){
    const [isOpen, setIsOpen] = useState(false);
    const {theme, toggleTheme} = useTheme();
    /*const toggletheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
*/
{onFilterChange}
const [priceRange, setPriceRange] = useState([null,null]);
const [location, setLocation] = useState("");
const [rating, setRating] = useState("");
const [sortOpition, setSortOpition] = useState("priceLowHigh");
const [filterLocation, setFilteredLocation] = useState([]);
const [showSuggestion, setShowSuggestion] =useState(false);
const locationSuggestionRef = useRef(null);

    function toggleSidebar(){
        setIsOpen(!isOpen);
    }
    const sidebarRef = useRef(null);
    useEffect(()=>{
      function HandleClickOutside(e){
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)){
          setIsOpen(false);
        }
      }
      if (isOpen){
        document.addEventListener("mousedown", HandleClickOutside);
      }
      else{
        document.removeEventListener("mousedown", HandleClickOutside);
      }
      return ()=>{
        document.removeEventListener("mousedown", HandleClickOutside);
      }

    }, [isOpen]);
    const handleClick = (callback) => {
        callback();       // scroll to section
        setIsOpen(false); // close sidebar
    }

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
  ? "bg-green-500 text-white border-gray-600 placeholder-white focus:ring-indigo-500"
  : "bg-green-400 text-gray-900 border-gray-300 placeholder-black focus:ring-indigo-500";

  const cardBg =
    theme === "dark"
      ? "bg-green-600 text-white"
      : "bg-green-500 text-black border-gray-300";

      const dropdownStyle =
    theme === "dark"
      ? "bg-gray-700 text-white"
      : "bg-green-400 text-black";

    return(
      <div>
      {!isOpen && (
                  <div className="mt-4 ml-4">
  <button
    onClick={() => setIsOpen(true)}
    className={`p-2 rounded text-2xl cursor-pointer ${ theme === "dark" ?"hover:bg-gray-800 active:bg-gray-900" :"hover:bg-gray-200 active:bg-gray-300"}`}
    >
      ☰
  </button>
  </div>
)}
          <nav   ref={sidebarRef}
          className={`fixed top-0 left-0 w-64 h-full bg-green-500 text-white p-4 transition-transform duration-300 z-40 ${isOpen ? "w-64 translate-x-0" : "-translate-x-full w-0 overflow-hidden"}`}>
          {isOpen && (
    <>
      {/* Close button inside sidebar */}
      <button
        onClick={() => setIsOpen(false)}
        className={`mb-4 p-2 text-2xl rounded cursor-pointer hover:bg-green-600 active:bg-green-700`}
      >
        &lt;&lt;
      </button>

    <div className={`p-5 m-3 rounded-xl items-center shadow-md w-50 max-w-sm ${cardBg}`}>
        <h2 className="font-bold text-2xl text-center">Refine Results</h2>
        <div className="flex items-center flex-col gap-2 w-full relative z-50 ">
            <label className="w-full font-semibold">Price Range</label>
            <div>
            <input
            type="number"
            value={priceRange[0] ?? ""}
            onChange={(e)=>setPriceRange([(e.target.value) === "" ? null : Number(e.target.value),priceRange[1]])}
            placeholder="enter min price"
            className={`p-2 w-40 rounded-md focus:outline-none focus:ring-2 ${inputStyle}`}
            />
            </div>
            <div>
            <input
            type="number"
            value={priceRange[1] ?? ""}
            onChange={(e)=>setPriceRange([priceRange[0], (e.target.value) === "" ? null : Number(e.target.value)])}
            placeholder="enter max price"
            className={`p-2 w-40 rounded-md focus:outline-none focus:ring-2 ${inputStyle}`}
            />
            </div>
            </div>
            <div className="relative flex flex-col" ref={locationSuggestionRef}>
            <label className="w-full font-semibold">Location</label>
            <input
            type="text"
            value={location}
            placeholder="filter by location"
            className={`p-2 w-40 rounded-md focus:outline-none focus:ring-2 ${inputStyle}`}
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
            <div>
                <label className="w-full font-semibold flex felx-col">Rating</label>
                <select
                value={rating}
                onChange={(e)=>setRating(Number(e.target.value))}
                className={`p-2 w-40 rounded-md focus:outline-none focus:ring-2 ${inputStyle}`}>
                <option value="">All</option>
                    <option value="1">1 star & above</option>
                    <option value="2">2 stars & above</option>
                    <option value="3">3 stars & above</option>
                    <option value="4">4 stars & above</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            <div>
                <label className="w-full font-semibold flex flex-col">Sort By</label>
                <select
          className={`p-2 w-40 rounded-md focus:outline-none focus:ring-2 ${inputStyle}`}
          value={sortOpition}
                onChange = {(e)=>setSortOpition(e.target.value)}
                >
                    <option value="priceLowHigh">Price Low - High</option>
                    <option value="poopularity">Popularity</option>
                    <option value="newArrival">New Arrival</option>
                </select>

            </div>

    </div>

    

                    <div className="top-4 right-4 sm:top-2 sm:right-2 md:top-4 md:right-4 z-50">
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
</div>
            </>)}
            </nav>
        </div>
    )
}
export default Sidebar;