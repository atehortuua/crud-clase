//mongoose
import mongoose from "mongoose";

// crear schema y modelo 

const productSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            
        },
        price: {
            type : Number,
        },
            
        categorty: {
            
        },

       stock : {
            type : Number,
            
        },


});


export const productModel = mongoose.model('product', productSchema)

// "name":"tablet"
// "price" : 5000
// "stock" : 8