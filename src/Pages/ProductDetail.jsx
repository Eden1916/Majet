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
  const {id} = useParams();

  useEffect(()=>{
    getProductDetail(id)
    .then(data=>{setProducts(data)})
    .catch(console.error)
    .finally(()=>setLoading(false));
  }, [id]);

  if(loading){
    return <p>loading product details...</p>
  }
  if(!products || products.length ===0){
    return <p>No product found!</p>
  }

  return(
    <>
    <h1 className="text-center font-bold text-5xl m-5 font-serif text">Obtain Fresh And Quality By Filtering Your Choice</h1>
    <div className=" min-h-screen flex gap-6 p-5">
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {(Array.isArray(products)?products:[]).map ( product=>(
        <div key={product._id} className={`${theme === "dark" ? "bg-gray-900 hover:bg-gray-800 border-gray-700" : "bg-gray-300 hover:bg-gray-200 border-gray-300"} w-60 max-h-120 flex flex-col border rounded-2xl justify-between items-center gap-4 transition-transform hover:-translate-y-3 duration-200`}>
          <img src={product.image} alt={product.name} className="w-50 h-35 rounded-lg object-cover m-2"/>
      <p className="font-bold">Price: {product.price}/kg</p>
      <p className="font-bold">Location: {product.location}</p>
      <p className="font-bold">Date: {new Date(product.date).toLocaleDateString()}</p>
      <Rating value={product.rating}/>
      <AddToCart Name ={product.name} />
    </div>
      ))}
      </div>
      </div>
      <Footer/>
</>
  )
}

export default ProductDetail;