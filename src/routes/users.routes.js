import express from 'express'
import { createusers, deleteusers, getUserById, getusers, updateusers } from '../controllers/users.controllers.js';
const routerusers = express.Router();//permite crear las rutas


routerusers.get("/users", getusers);//obtener 
routerusers.get("/users/:id", getUserById)
routerusers.post("/createusers", createusers  )//crear
routerusers.put("/updateusers/:id", updateusers )//actualizar69
routerusers.delete("/deleteusers", deleteusers )


export default routerusers