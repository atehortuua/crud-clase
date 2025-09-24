import express from 'express'
import { createProduct, createUsers, deleteProduct, deleteUser, getproduct, getUsers, updateProduct, updateUser } from '../controllers/users.controllers.js';
const routerProduct = express.Router();//permite crear las rutas


routerProduct.get("/product", getproduct);
routerProduct.post("/createProduct",  createProduct)
routerProduct.put("/updateProduct", updateProduct)
routerProduct.delete("/deleteProduct", deleteProduct)


export default router 