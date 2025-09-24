import express from 'express'
import { createusers, getusers } from '../controllers/users.controllers';
const routerusers = express.Router();//permite crear las rutas


routerusers.get("/users", getusers);
routerusers.post("/createusers", createusers  )
routerusers.put("/updateusers", )
routerusers.delete("/deleteusers", )


export default routerusers; 