import express from 'express'
import { createusers, deleteusers, getusers, updateusers } from '../controllers/users.controllers.js';
const routerusers = express.Router();//permite crear las rutas


routerusers.get("/users", getusers);//obtener 
routerusers.post("/createusers", createusers  )//crear
routerusers.put("/updateusers", updateusers )//actualizar69
routerusers.delete("/deleteusers", deleteusers )


export default routerusers