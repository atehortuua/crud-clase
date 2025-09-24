import express from 'express'
import { getUsers } from '../controllers/users.controllers.js';
const router = express.Router();//permite crear las rutas


router.get("/users", getUsers);

export default router