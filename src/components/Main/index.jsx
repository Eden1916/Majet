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
    function goVegetable(){
        navigate("/category/Vegetable")
    }
    function goFruit(){
        navigate(`/category/Fruits`)
    }function goGrain(){
        navigate("/category/Grain")
    }
    return(
        <>
        <MainDescription/>
        <div ref = {productRef} className ="flex flex-wrap justify-center gap-5 p-5 m-10">
        <div className="w-full text-center">
        <h2 id="productheading" className="text-center font-bold font-serif text-4xl sm:text-5xl my-8 px-2 m-auto">Discover a wide variety of fruits, vegetables, grains, and organic items — all freshly harvested for you.</h2>
        </div>
        <section className="flex flex-wrap justify-center gap-4 px-4">
        <Product src = {vegetable} alt = "vegetable picture" subtitle = "Fresh Vegetables" go={goVegetable} description="Crisp, wholesome, and full of nutrients for everyday meals."/>
        <Product src = {fruit} alt = "fruit picture" subtitle = "Fresh Fruits" go={goFruit} description="Fresh and packed with natural goodness to keep you healthy."/>
        <Product src = {grain} alt = "grain picture" subtitle = "Fresh Grains" go={goGrain}  description="High-quality grains that are perfect for nutritious and healthy dishes."/>
        </section>
        </div>
        <div ref = {aboutRef} className="gap-5 p-5">
        <About/>
        </div>
        </>
    )
}

export default Main;