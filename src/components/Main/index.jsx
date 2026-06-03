import React, {forwardRef} from "react"
import vegetable from "../../assets/vegetable.png"
import fruit from "../../assets/fruit.png"
import grain from "../../assets/grains.png"
import About from "./About.jsx"
import MainDescription from "./mainDescription.jsx"
import Product from "./product.jsx"
import { useNavigate } from "react-router-dom";

function Main({refs}){
    const {productRef, aboutRef} = refs;
    const navigate = useNavigate()

    async function goToCategory(categoryName) {
        const token = localStorage.getItem("token");
        if(!token){
            localStorage.setItem("intendedCategory", categoryName);
            navigate("/login");
            return;
        }
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
                headers: { Authorization: "Bearer " + token }
            });
            const categories = await res.json();
            const match = categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
            if(match){
                navigate(`/product-groups/${match._id}`);
            } else {
                navigate("/category");
            }
        } catch(err) {
            navigate("/category");
        }
    }

    return(
        <>
        <MainDescription/>
        <div ref = {productRef} className ="flex flex-wrap justify-center gap-5 p-5 m-10">
        <div className="w-full text-center">
        <h2 id="productheading" className="text-center font-bold font-serif text-4xl sm:text-5xl my-8 px-2 m-auto">Discover a wide variety of fruits, vegetables, grains, and organic items — all freshly harvested for you.</h2>
        </div>
        <section className="flex flex-wrap justify-center gap-4 px-4">
        <Product src = {vegetable} alt = "vegetable picture" subtitle = "Fresh Vegetables" go={()=>goToCategory("Vegetables")} description="Crisp, wholesome, and full of nutrients for everyday meals."/>
        <Product src = {fruit} alt = "fruit picture" subtitle = "Fresh Fruits" go={()=>goToCategory("Fruits")} description="Fresh and packed with natural goodness to keep you healthy."/>
        <Product src = {grain} alt = "grain picture" subtitle = "Fresh Grains" go={()=>goToCategory("Grains")} description="High-quality grains that are perfect for nutritious and healthy dishes."/>
        </section>
        </div>
        <div ref = {aboutRef} className="gap-5 p-5">
        <About/>
        </div>
        </>
    )
}

export default Main;