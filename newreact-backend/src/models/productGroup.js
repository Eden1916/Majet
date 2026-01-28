const mongoose = require("mongoose");

const productGroupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    type:{
        type:String,
        enum:["seasonal","non-seasonal"],
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
}, { timestamps: true});

const ProductGroup = mongoose.model("ProductGroup", productGroupSchema);

module.exports = ProductGroup;