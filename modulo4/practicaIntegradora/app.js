//importar express
const { application } = require('express')
const express = require('express')
const path = require('path')
//instanciar express 
const app = express()
const PUBLICFOLDER = path.resolve('public')
app.use(express.static(PUBLICFOLDER))
//escuchamos un puerto 
const numeroPuerto = 3030
app.listen(numeroPuerto,(error)=>{
    if(error){
        return console.log('error',error)
    }
    console.log('servidor levantado en 3030')
})
// RUTAS
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('views/home.html'))
})
//ruta a registro
app.get('/register.html',(req,res)=>{
    res.sendFile(path.resolve('views/register.html'))
})
app.get('/login.html',(req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
})