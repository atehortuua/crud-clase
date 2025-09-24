import express from 'express'
import { createUsers, deleteUser, getUsers, updateUser } from '../controllers/users.controllers.js';
const router = express.Router();//permite crear las rutas


router.get("/users", getUsers);
router.post("/createUser",  createUsers)
router.put("/updateUser", updateUser)
router.delete("/deleteUser", deleteUser)