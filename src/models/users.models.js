//mongoose
import mongoose from "mongoose";

// crear schema y modelo 

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        email: Number,
        pasword : String,


});


export const UserModel = mongoose.model('User', userSchema)
