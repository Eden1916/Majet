const DetailProduct = require("../models/detailProduct");
const mongoose = require("mongoose");


const getProductDetail = async(req, res)=>{
            try{
                const { product_group } = req.params;

                if (!product_group) {
                    return res.status(400).json({ message: "product_group is required" });
                  }

                const products = await DetailProduct.find({ product_group }).populate("product_group");

        
                res.json(products)
            }catch(error){
                console.error(error);
                res.status(500).json({message: "Server error"});
            }
        
}
module.exports = {getProductDetail};

