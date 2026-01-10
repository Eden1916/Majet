import user from "../../assets/blackUsingMajet.png"
function About(){
    return(
    <section className="flex items-center justify-between flex-wrap">
            <div className="md:w-2/3">
             <h2 className="text-center text-4xl font-bold mb-12">About Majet</h2>
             <p className="font-sans text-2xl m-3">Majet is a digital platform that connects local farmers directly with customers. Our goal is to make fresh and affordable produce easily accessible while helping farmers earn fair prices for their hard work.
               We believe that everyone deserves access to healthy food, and that farmers should benefit from the value they create — not lose it to middlemen.
               Through Majet, farmers can showcase their products, and customers can easily browse, order, and support local agriculture from the comfort of their homes.
               Join us in building a fair, transparent, and sustainable food marketplace.
             </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/3 items-center">
            <img src={user} alt="a person using Majet web" className="rounded w-fullmax-w-md object-contain m-8"/>
            </div>
    </section>
    )
}
export default About;