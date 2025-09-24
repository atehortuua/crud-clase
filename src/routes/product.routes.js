import express from 'express'
import { createProduct,  deleteProduct,  getproduct,  updateProduct, } from '../controllers/product.controllers.js';
const routerProduct = express.Router();//permite crear las rutas


routerProduct.get("/product", getproduct);
routerProduct.post("/createProduct",  createProduct)
routerProduct.put("/updateProduct", updateProduct)
routerProduct.delete("/deleteProduct", deleteProduct)


export default router 