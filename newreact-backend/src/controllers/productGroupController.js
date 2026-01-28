const productGroup = require("../models/productGroup");

const getProductGroups = async(req, res) =>{
    try{
        const {categoryId, type} = req.query;

        let filter = {isActive:true}

        if(categoryId){
            filter.category = categoryId;
        }

        if(type){
            filter.type = type;
        }

        const productGroups = await productGroup.find()//filter).populate("category", "name");

        res.json(productGroups)
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {getProductGroups};