function Sort (sort, setSort){
    return(
        <div className="items-center justify-center flex ">
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="border border-gray-500 items-center justify-center flex">
                <opition value="">Sort by</opition>
                <opition value="Low-High">Price=Low-High</opition>
                <opition value="High-Low">Price=High-Low</opition>
                <opition value="Rating">Top Rated</opition>
                <opition value="New">New Arrivals</opition>
            </select>
        </div>
    )
}
export default Sort;