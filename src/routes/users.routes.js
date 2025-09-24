import express from 'express'
import { getusers } from '../controllers/users.controllers';
const routerusers = express.Router();//permite crear las rutas


routerusers.get("/users", getusers);



export default routerusers; 