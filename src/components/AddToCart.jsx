import {useState} from 'react';

function AddToCart({Name}){

    const [isAdd, setAdd] = useState(false);
    const [input, setinput] = useState("1");
    function handleAdd(){
        setAdd(true);
    }
    function handleSave(){
        input < 1?alert("Please enter a valid amount greater than 0!"):input>100000?alert(`You can't order more than 100,000 kg at once!`):alert(`✅ ${input} kg of ${Name} is added to cart!`)
    }
    function handleCancel(){
        setAdd(false)
        setinput("")
    }

    return(
        <div>
        {!isAdd && (<button onClick={handleAdd} className="bg-green-600 w-30 rounded font-bold text-white mb-5">Add To Cart</button>)}
        {isAdd && (<><input
        value={input}
        type='number'
        placeholder="enter amount"
        onChange={(e)=>setinput(e.target.value)}
        className="w-40 border border-gray-700 rounded text-center"/>
        <div className="flex">
            <button onClick={handleSave} className="bg-green-500 hover:bg-green-400 text-white font-bold rounded w-15 m-2">Save</button>
            <button onClick={handleCancel} className="bg-red-500 hover:bg-red-400 text-white font-bold rounded w-15 m-2">Cancel</button>
            </div>
            </>)}
        </div>
    )
}
export default AddToCart;