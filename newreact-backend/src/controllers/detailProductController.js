const DetailProduct = require("../models/detailProduct");
const mongoose = require("mongoose");


const getProductDetail = async(req, res)=>{
            try{
                const { groupId  } = req.params;

                if (!groupId ) {
                    return res.status(400).json({ message: "groupId is required" });
                  }

                const products = await DetailProduct.find({product_group: groupId  }).populate("product_group");

        
                res.json(products)
            }catch(error){
                console.error(error);
                res.status(500).json({message: "Server error"});
            }
        
}
module.exports = {getProductDetail};

