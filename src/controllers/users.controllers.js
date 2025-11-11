
import mongoose from "mongoose";
import { UserModel } from "../models/users.models.js"
import transporter from "../config/nodemailer.js"



export const registerUser = async (req , res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await UserModel.findOne({email});
        if (existingUser) return res.status(400).json({ message: "El correo ya esta registrado "});


        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "1h"});

        const newUser = new UserModel({
                name, 
                email,
                password,
                verificationToken : token,
        });
        await newUser.save();

        const verificationTokenLink = `http://localhost:3000/api/users/verify/${token}`;

        await transporter.sendMail({
            from: `"Verificación" <${process.env.EMAIL_USER}>`,
            to : email,
            subject : "verifica tu cuenta",
            html: `<p> Hola ${name}, Hola Bienvenido a Burguer Master mil gracias por participar y hacer parte de de este hermoso barrio. Para verifiacar da clic aqui</p>
            <a href="${verificationTokenLink}">${verificationTokenLink}</a>`,
        });

        res.status(200).json({message:"usuario registrado. Revisa tu correo para verificar tu cuenta. "});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar el usuario" });
        
    }
};




export async function getusers(req, res) {
    try {
        //metodos de consulta mongoose
        const users = await UserModel.find();
        //estados http
        return res.status(200).json({ok: true, users})      

    } catch (error) {
       return res.status(500).json({ok: false, msg:"error interno"})
    }
}
export async function getUserById (req,res){
    try {
        const id = req.params.id
        if (!mongoose.isValidObjectId(id)){
            return res.status(400).json({ok: false, msg: "ID invalido"})
        }

        const user = await UserModel.findById(id)
        if( !user ){
            return res.status(404).json({ok: false, msg: "usuario no encontrado"})

        }
        return res.status(200).json({ok: true , user})

    } catch (error) {
        return res.status(500).json({ok: false, msg:"error interno"})
    }
}


export async function  updateusers (req, res){
    try {
       const id = req.params.id;
       const data = req.body;

       const userUptade = await UserModel.findByIdAndUpdate(id, data, {new: true});
       if(!userUptade){
        return res.status(404).json({ok: false, msg : "error interno"})
       }
       return res.status(200).json({ok: true, userUptade})
    } catch (error) {
        console.log(error)
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}

export async function  deleteusers (req, res){
    try {
        const id = req.params.id;

        const deletedUser = await UserModel.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json ({ok: false, msg : "usuario no encontrado"})
        }
        return res.status(200).json({ok:true, msg : "ususario eliminado"})
        
    } catch (error) {
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}