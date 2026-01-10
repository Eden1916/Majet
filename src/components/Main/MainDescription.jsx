import homeImage from "../../assets/homePageImage.png"
import {useNavigate} from "react-router-dom"
function MainDescription(){
    const navigate = useNavigate();

    function shop(){
        navigate("/signup");
    }
return(
    <div>
        <div className="flex items-center justify-between flex-wrap gap-1 m-10">
            <div className="flex flex-col gap-4 w-full md:w-1/3 items-center justify-center">
        <img src={homeImage} alt="a girl ordering online from Majet" className="max-w-md w-full rounded-xl m-10"/>
        </div>

            <ul className="how">
            <div id="howToDoHeading">
            <h4 className="text-center font-[arial] font-bold text-3xl text-green-700 mb-12">How To Use</h4>
        </div>
        <div className="text-2xl font-[verdana]">
              <li className="before:content-['➔'] before:text-orange-500 before:mr-5 m-3">First you need to Sign up if you didn't before.</li>
              <li className="before:content-['➔'] before:text-orange-500 before:mr-5 m-3">If you have signed up before you don't have to do it again, instead you need to login.</li>
              <li className="before:content-['➔'] before:text-orange-500 before:mr-5 m-3">Then you need to search for the product you want to.</li>
              <li className="before:content-['➔'] before:text-orange-500 before:mr-5 m-3">After that you can specify the amount you want and add to your cart.</li>
              <li className="before:content-['➔'] before:text-orange-500 before:mr-5 m-3">Finally you just pay and have a recipit.</li>
              </div>
            </ul>

        </div>
        <div className="text-3xl font-[arial] font-bold text-center m-5">
        <button className="bg-green-800 text-white sm:w-1/3 md:w-1/4 lg:w-1/6 py-2 text-xl text-font-bold font-[sans-serif] rounded cursor-pointer hover:bg-green-700 active:bg-green-600 m-15" onClick={shop}>Shop Now</button>
        </div>
        </div>
        
)
}
export default MainDescription;