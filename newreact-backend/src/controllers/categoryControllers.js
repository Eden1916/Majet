const category = require("../models/categories")

const getCategories = async(req, res)=>{
    try{
        const categories = await category.find()
        .select('name image description')
        res.json(categories)
    }catch(error){
        console.error("Get Categories Error:", error);
        res.status(500).json({message: "Server error"});
    }
}
module.exports = {getCategories};