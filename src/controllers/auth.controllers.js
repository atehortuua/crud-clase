import { createToken } from "../helpers/jwt.js";
import { UserModel } from "../models/users.models.js"
import bcrypt from 'bcrypt'


export async function  createusers (req, res){
    try {
        const data = req.body;
        const userFound = await UserModel.findOne({email : data.email});
        if(userFound){
            return res.status(400).json({ok: false , msg : "correo ya registrado"})
        }
        //encriptar password
        const saltRounds = 10; //entre mas alto seguro 
        const hashPasword = await bcrypt.hash(data.password, saltRounds);

        const user = new UserModel({
            name: data.name,
            age: data.age,
            email: data.email,
            password: hashPasword
        })

        await user.save();
        return res.status(201).json({ok : true, user})

    } catch (error) {
        console.log(error)
       return res.status(500).json({ok: false, msg:"error interno"})
        
    }
}
 
export async function login (req, res){

    try{
         const {email,password}=req.body
         const userFound = await UserModel.findOne({email});
         console.log("asdasd")

        
        if(!userFound){
            //revisar comentario http
            return res.status(404).json ({ok :true,msg:"correo no registrado"})
        }
        const isValid = await bcrypt.compare(password, userFound.password);

        if(!isValid){
          return res.status(404).json({ok: false , msg : "contraseña incorrecta"})  
        }
        const token = createToken({userFound});
        res.status(200).json ({ok : true , token: token})

    }catch(error){
    console.log(error)
       return res.status(500).json({ok: false, msg:"error interno"})
    
}
}