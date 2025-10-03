import express from 'express'
import { createProduct,  deleteProduct,  getproduct,  getproductById,  updateProduct, } from '../controllers/product.controllers.js';
import { getUserById } from '../controllers/users.controllers.js';
const routerProduct = express.Router();//permite crear las rutas


routerProduct.get("/product", getproduct, );
routerProduct.get("/product/:id", getproductById );
routerProduct.post("/createProduct",  createProduct, )
routerProduct.put("/updateProduct/:id", updateProduct, )
routerProduct.delete("/deleteProduct/:id", deleteProduct, )


export default routerProduct; 