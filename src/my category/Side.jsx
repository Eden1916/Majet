import {useState, useEffect, useRef} from 'react';
import Category from "./CategoryPage.jsx";
import { useTheme } from '../context/ThemeContext.jsx';

function Side({ setType }){
    const [isOpen, setIsOpen] = useState(false);
    const {theme, toggleTheme} = useTheme();
    /*const toggletheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
*/
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
            <div className={`flex flex-col items-center p-5 m-3 rounded-xl shadow-md w-50 max-w-sm h-64 ${theme === "dark" ? "bg-green-800 text-white" : "bg-green-600 text-black"} `}>
                    <label className="font-bold text-xl">Filter Product Type</label>
                    <select
                    onChange={(e)=>{setType(e.target.value)}}
                    className={`p-2 rounded-md focus:outline-none focus:ring-2 w-40 m-4 text-black ${theme === "dark" ? "bg-green-700 text-white hover:bg-green-500": "bg-green-500 text-black hover:bg-green-300"}`}
                    >
                        <option value="">All</option>
                        <option value="seasonal">Seasonal</option>
                        <option value="non-seasonal">Non-Seasonal</option>
                    </select>
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
export default Side;