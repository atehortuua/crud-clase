//importare express
//escuchar puerto cors
import express from 'express'; //module = javascript
import { connectDB } from './src/config/db-config.js';
// const express = require('express');//commonJs= node js
import { configDotenv } from 'dotenv';
import router from './src/routes/product.routes.js';
import routerusers from './src/routes/users.routes.js';

configDotenv()
const app = express();

connectDB();

app.use(router)
app.use(routerusers)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto ${ port }`)
});
