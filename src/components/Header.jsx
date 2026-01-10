import {useNavigate} from "react-router-dom"
import farmer1 from "../assets/farmer1.png"
import fruit from "../assets/fruits1.jpg"
import HomeSwiper from "../components/HomeSwiper.jsx"
import PageSearch from "../components/PageSearch.jsx"
function Header(){
    const navigate = useNavigate();
    function handleLogin(){
        navigate("/Login");
    }
    function handleSignup(){
        navigate("/Signup")
    }
    return(
                <header>
                    <section id="homeSection">
                    <h1 className="text-center font-bold font-serif text-4xl sm:text-5xl my-8 px-2">Welcome To Majet</h1>
                    <h2 className="text-center text-3xl flex justify-center items-center"> Connect Farmers With Customers</h2>
                    <div className="flex justify-center m-3">
                        <PageSearch/>
                        </div>
                    <div className="flex flex-wrap justify-end m-2">
                        <button className="m-3 w-[100px] font-bold text-xl rounded bg-green-700 text-white hover:bg-green-800 active:bg-green-900 cursor-pointer" onClick={handleLogin}>Login</button>
                        <button className="m-3 w-[100px] font-bold text-xl rounded bg-green-700 text-white hover:bg-green-800 active:bg-green-900 cursor-pointer" onClick={handleSignup}>SignUp</button> 
                    </div>
                    <div className="max-w-8xl mx-auto px-2 flex items-start md:flex-row flex-col gap-6">
                    <div className="md:w-2/3 items-start">
                    <p className="text-2xl font-sans m-3">🌿 Majet is an innovative e-commerce platform dedicated to transforming the way agricultural products reach people.
                       We focus on connecting customers directly with fresh, high-quality produce at affordable prices. At the same time, we empower farmers by giving them a fair, reliable, and profitable marketplace for their goods.</p>
                    <p className="text-2xl font-sans m-3">
                       Through Majet, customers gain easy access to fresh farm products without the unnecessary middlemen that increase cost and reduce quality. Farmers, in return, receive appropriate payment for their hard work, ensuring their products are valued the way they deserve.
                       </p>
                       <p className="text-2xl font-sans m-3">
                       Our mission is simple yet powerful:
                       to make fresh agricultural products accessible to every community, while uplifting the farmers who grow them.
                          </p>
                       <ul className="list-disc list-inside text-2xl font-sans m-3">
                        We believe in:
                         <li>Quality – delivering only the best, naturally grown products</li>

                         <li>Freshness – ensuring every item reaches you at its peak</li>

                         <li>Sustainability – supporting ethical and responsible farming</li>

                         <li>Fairness – benefiting both customers and farmers</li>
                       </ul>
                    <p className="text-2xl font-sans m-3">
                       From farm to table, Majet is committed to building a trusted, supportive, and sustainable agricultural marketplace for everyone.
                       </p>
                       </div>
                       <div className="flex flex-col gap-4 w-full md:w-1/3 items-center mt-8 mb-6">
                    <img src={fruit} alt="fresh fruits" className="rounded w-full max-w-lg object-contain"/>
                    <img src={farmer1} alt="a farmer using Majet platform" className="rounded w-full max-w-lg object-contain"/>
                    </div>
                    </div>
                    <HomeSwiper/>
                </section>
            </header>
        
    )
}

export default Header;