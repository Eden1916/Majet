const DetailProduct = require("../models/detailProduct");

const getProductDetail = async(req, res)=>{
            try{
                const {product_groupId, type} = req.query;
        
                if(product_groupId){
                    filter.product_group = product_groupId;
                }
        
                if(type){
                    filter.type = type;
                }
        
                const ProductDetails = await DetailProduct.find();
        
                res.json(ProductDetails)
            }catch(error){
                console.error(error);
                res.status(500).json({message: "Server error"});
            }
        
}
module.exports = {getProductDetail};

