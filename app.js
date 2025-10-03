//importare express
//escuchar puerto cors
import express, { json } from 'express'; //module = javascript
import { connectDB } from './src/config/db-config.js';
// const express = require('express');//commonJs= node js
import { configDotenv } from 'dotenv';
import router from './src/routes/product.routes.js';
import routerusers from './src/routes/users.routes.js';
import routerProduct from './src/routes/product.routes.js';

configDotenv()
const app = express();

connectDB();

app.use( express.json());

app.use(router)
app.use(routerusers)
app.use(routerProduct)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto ${ port }`)
});
