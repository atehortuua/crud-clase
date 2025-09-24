//importare express
//escuchar puerto cors 
import express from 'express'; //module = javascript
import { connect } from 'mongoose';
import { connectDB } from './src/config/db-config.js';
// const express = requiere('express');//commonJs= node js

const app = express();

connectDB();

app.listen(3000, ()=>{
    console.log(`servidor corriendo en el puerto 3000`)
});