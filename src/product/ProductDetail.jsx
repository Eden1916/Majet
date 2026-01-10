import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Products } from "../data/Products.js";
import {useTheme} from "../context/ThemeContext.jsx"
import AddToCart from "../components/AddToCart.jsx";
import Rating from "../data/Rating.jsx";
import FilterProducts from "./FilterProducts.jsx"
import Footer from "../components/Footer.jsx"

export default function ProductDetail() {
  const { slug } = useParams();

  const baseProducts =   Products.filter((p) => p.slug === slug) // Initial filter by slug

  const [filteredproducts, setFilteredProducts] = useState(baseProducts);

  useEffect(() => {
    setFilteredProducts(baseProducts);
  }, [slug])
  


  if (baseProducts.length === 0) {
    return <h2>Product not found</h2>; // Handle case where no products match
  }

  const {theme} = useTheme();

  return (
    <>
          <FilterProducts Products={baseProducts} onFilter={setFilteredProducts}/>

    <h1 className="text-center font-bold text-5xl m-5 font-serif text">Obtain Fresh And Quality {slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()} By Filtering Your Choice</h1>
    <div className=" min-h-screen flex gap-6 p-5">
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {filteredproducts.map(product => (
        <div key={product.id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-60 max-h-120 flex flex-col border rounded-2xl justify-between items-center gap-4 transition-transform hover:-translate-y-3 duration-200`}>
          <img src={product.src} alt={product.name} className="w-50 h-35 rounded-lg object-cover m-2"/>
      <p className="font-bold">Price: {product.price}/kg</p>
      <p className="font-bold">Location: {product.location}</p>
      <p className="font-bold">Date: {product.date}</p>
      <Rating value={product.rating}/>
      <AddToCart Name ={product.name} />
    </div>
      ))}
      </div>
      </div>
      <Footer/>
</>
  );
}
