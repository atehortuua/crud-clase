//importare express
//escuchar puerto cors 
import express from 'express'; //module = javascript
// const express = requiere('express');//commonJs= node js

const app = express();



app.listen(3000, ()=>{
    console.log(`servidor corriendo en el puerto 3000`)
});