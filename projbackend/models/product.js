const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        name: string,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        name: string,
        trim: true,
        required: true,
        maxlength: 2000  
    },
    price: {
        name: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: "Category", //mention reference variable where it is pulling out
        required:true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }

}, 
{timestamps: true}
);

module.exports = mongoose.model("Product",productSchema);
        