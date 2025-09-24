import express from 'express'
import { createProduct, createUsers, deleteUser, getproduct, getUsers, updateUser } from '../controllers/users.controllers.js';
const router = express.Router();//permite crear las rutas


router.get("/product", getproduct);
router.post("/createProduct",  createProduct)
router.put("/updateUser", updateUser)
router.delete("/deleteUser", deleteUser)