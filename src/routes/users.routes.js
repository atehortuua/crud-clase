import express from 'express'
import { createusers, getusers, updateusers } from '../controllers/users.controllers';
const routerusers = express.Router();//permite crear las rutas


routerusers.get("/users", getusers);//obtener 
routerusers.post("/createusers", createusers  )//crear
routerusers.put("/updateusers", updateusers )//actualizar
routerusers.delete("/deleteusers", )


export default routerusers; 