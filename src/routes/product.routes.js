import express from 'express'
import { createProduct, createUsers, deleteProduct, deleteUser, getproduct, getUsers, updateProduct, updateUser } from '../controllers/users.controllers.js';
const router = express.Router();//permite crear las rutas


router.get("/product", getproduct);
router.post("/createProduct",  createProduct)
router.put("/updateProduct", updateProduct)
router.delete("/deleteProduct", deleteProduct)