import PropTypes from "prop-types";
function Product(props){
    return(
            <div className="card-hover lg:w-[30%] sm:w-[80] md:w-[45%] h-auto border border-gray-300 rounded-xl flex flex-col items-center justify-center p-4 transition-transform duration-200 hover:-translate-y-3">
                <img src={props.src} alt={props.alt} className="rounded-xl object-cover w-full h-48 mg:h-60"/>
                <h3 className="text-[rgb(var(--text))] font-bold text-xl text-center mg:text-2xl font-[arial ]">{props.subtitle}</h3>
                <p className="text-[rgb(var(--text))]  md:text-xl text-base text-center font-[arial ]">{props.description}</p>
                <button className="w-2/3 p-2 text-sm sm:text-base md:text-lg font-bold rounded bg-green-800 text-white hover:bg-green-700 active:bg-green-600 text-center" onClick={props.go}>View Products</button>
            </div>
    )
};
    Product.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
}
export default Product;