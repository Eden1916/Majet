function Rating({value}){
    return(
        <div className="flex space-x-1">
        {[1,2,3,4,5].map((star)=>(
         <span
         key={star} className={`${star <= value?"text-yellow-500":"text-gray-400"} text-2xl`}>
            ★
            </span>
    ))}
    </div>
    )
}
export default Rating;