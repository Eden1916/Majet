const productGroup = require("../models/productGroup");
const DetailProduct = require("../models/detailProduct");

const getProductGroups = async(req, res) =>{
    try{
        const {categoryId} = req.params;

        const groups = await productGroup.find({ category: categoryId });

        res.json(groups.map(group => ({
            _id: group._id,
            name: group.name,
            image: group.image,
            type: group.type,
            product_group: group._id
        })));

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {getProductGroups};