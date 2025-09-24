//importare express
//escuchar puerto cors 
import express from 'express'; //module = javascript
import { connectDB } from './src/config/db-config.js';
// const express = requiere('express');//commonJs= node js
import { configDotenv } from 'dotenv';
configDotenv( )
const app = express();

connectDB();
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto ${ port}`)
});