const productGroup = require("../models/productGroup");
const DetailProduct = require("../models/detailProduct");

const getProductGroups = async(req, res) =>{
    try{
        const {categoryId} = req.params;

        const products = await DetailProduct.find({ category: categoryId });
const uniqueNames = [...new Set(products.map(p => p.name))]; // unique product names

res.json(uniqueNames.map(name => {
    const product = products.find(p => p.name === name);
    return {
        name: product.name,
        image: product.image,
        price: product.price,
        type: product.type,
        product_group: product.product_group
    };
}));

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {getProductGroups};