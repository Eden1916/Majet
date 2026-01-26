const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image: String,
    rating:{
        type:Number,
        default:0
    }
}, { timestamps: true });
module.exports = mongoose.model("Product", productSchema);