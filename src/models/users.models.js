//mongoose

import mongoose from "mongoose";

// crear schema y modelo 

const userSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required: [true, "El nombre es obligatorio"]
        },
      
        email: {
            type: String,
            required :[true, "el correo es obligatorio"],
            unique : true,
            lowercase: true,
            trim : true,
            match: [/^\S+@\S+\.\S+$/, 'Email inválido']
        },

        password : {
            type : String,
            require: [true, "pasword requerida"],
            minlength : [8, "la contraseña requiere min 8 caracteres"],
            verified : {
                type: Boolean,
                default: false,

            },
            
        },

        role : { 
            type : String,
            enum: ['cliente', 'owner', 'admin'],
            default : 'cliente'
        },
        verified: {
            type : Boolean,
            default : false
        },

        verificationToken: String


});


export const UserModel = mongoose.model('User', userSchema)


// {
//     "name": "miguel",
//     "age": 21,
//     "email": "dssadQ@asdd.com",
//     "pasword": "sdaasdasd332"

// }