import {useState, useEffect} from "react";
import {getProductDetail} from "../api/productDetail.js";
import {useTheme} from "../context/ThemeContext.jsx"
import AddToCart from "../components/AddToCart.jsx";
import Rating from "../components/Rating.jsx"
import Footer from "../components/Footer.jsx"
import {useParams} from "react-router-dom";


function ProductDetail(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {theme} = useTheme();
  const {product_group} = useParams();

  useEffect(()=>{
    getProductDetail(product_group)
    .then(data=>{setProducts(data)})
    .catch(console.error)
    .finally(()=>setLoading(false));
  }, [product_group]);

  if(loading){
    return <p className="text-center mt-20 text-lg">Loading products...</p>
  }
  if(!products || products.length ===0){
    return <p className="text-center mt-20 text-lg">No products found!</p>
  }

  return(
    <>
    <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mx-4 my-5 font-serif">Obtain Fresh And Quality Products Online</h1>
    <div className="min-h-screen px-4 py-6">
      <div className="flex flex-wrap justify-center gap-6">
        {(Array.isArray(products) ? products : []).map(product => (
          <div key={product._id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-full sm:w-64 md:w-56 lg:w-60 flex flex-col border rounded-2xl items-center justify-between gap-3 p-4 transition-transform hover:-translate-y-2 duration-200`}>
            <img src={product.image} alt={product.name} className="w-full h-40 rounded-lg object-cover"/>
            <h3 className="font-bold text-lg text-center">{product.name}</h3>
            <p className="font-medium">Price: {product.price}/kg</p>
            <p className="font-medium">Location: {product.location}</p>
            <p className="font-medium">Date: {new Date(product.date).toLocaleDateString()}</p>
            <Rating value={product.rating}/>
            <AddToCart Name={product.name}/>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetail;