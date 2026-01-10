import PropTypes from "prop-types"
import {useNavigate} from "react-router-dom"
function MainFruit(props){
    const navigate = useNavigate()

    function handleView(){
        navigate(props.route)
    }
    return(
    <main>
        <div className="bg text card-hover flex flex-col w-[270px] h-[350px] justify-between items-center p-5 border border-[#ddd] rounded-2xl transition-transform hover:-translate-y-2 ease-out duration-200">
            <img src={props.src} className="w-40 rounded-lg h-30 object-cover" alt={props.alt}/>
            <h3 className="font-bold text-[rgb(var(--text))]">Fresh {props.name}</h3>
            <h4 className="text-[rgb(var(--text))]">{props.location}</h4>
            <h3 className="text-[rgb(var(--text))]">{props.type}</h3>
            <h3 className="text-[rgb(var(--text))]">{props.dateAdded}</h3>
            <p className="font-bold text-[rgb(var(--text))]" data-price={props.price}>{props.price}br/kg</p>

            <button onClick={handleView} className="bg-green-600 w-30 rounded font-bold text-white cursor-pointer">View More</button>
        </div>
    </main>
    )
}

MainFruit.propTypes = {
    src : PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    route:PropTypes.string.isRequired
};
export default MainFruit;