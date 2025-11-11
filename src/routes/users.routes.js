import express from 'express'
import {  deleteusers, getUserById, getusers, updateusers } from '../controllers/users.controllers.js';
import { createusers, login } from '../controllers/auth.controllers.js';
import { UserModel } from '../models/users.models.js';


const routerusers = express.Router();//permite crear las rutas

//RUTA DE VERIFICACION 

routerusers.get("/verify/:token" , async (req, res) =>{

    try{

    const {token} = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const  user =  await UserModel.findOne ({email : decoded.email});
    if(!user) return res.status(404).json({ msg : "usuario no encontradi"});

    user.verified = true;
    user.verificationToken = null;
    await user.save();

    res.status(200).json({msg : "correo verificado con exito"})

    } catch (error){
    res.status(400).json({ message: "Token inválido o expirado" });
    }
});

// rutas post

routerusers.get("/users", getusers);//obtener 
routerusers.get("/users/:id", getUserById)

routerusers.put("/updateusers/:id", updateusers )//actualizar69
routerusers.delete("/deleteusers/:id", deleteusers )

routerusers.post("/createUser" , createusers)
routerusers.post("/login", login)



export default routerusers