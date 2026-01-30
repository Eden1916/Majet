const mongoose = require("mongoose");

const detailProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    product_group:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductGroup",
        required:true
    },
    date:{
        type:Date,
        required:true
    }
}, {timestamps: true});

const DetailProduct = mongoose.model("DetailProduct", detailProductSchema);

module.exports = DetailProduct;