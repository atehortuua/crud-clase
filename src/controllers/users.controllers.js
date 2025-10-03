
import mongoose from "mongoose";
import { UserModel } from "../models/users.models.js"

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

export async function  createusers (req, res){
    try {
        const data = req.body;
        const userFound = await UserModel.findOne({email : data.email});
        if(userFound){
            return res.status(400).json({ok: false , msg : "correo ya registrado"})
        }
        const user = await UserModel.create(data)
        return res.status(201).json({ok : true, user})

    } catch (error) {
        console.log(error)
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}

export async function  updateusers (req, res){
    try {
       const id = req.params.id;
       const data = req.body;

       const userUptade = await UserModel.findByIdAndUpdate(id, data, {new: true});
       return res.status(200).json({ok: true, userUptade})
    } catch (error) {
        console.log(error)
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}

export async function  deleteusers (req, res){
    try {
        res.send("usuario eliminado")
    } catch (error) {
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}