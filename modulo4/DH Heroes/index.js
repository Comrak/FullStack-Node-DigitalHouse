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
    console.log('servidor levantado')
})
// RUTAS
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('views/index.html'))
})
app.get('/babbage',(req,res)=>{
    res.sendFile(path.resolve('views/babbage.html'))
})
app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.resolve('views/berners-lee.html'))
})
app.get('/clarke',(req,res)=>{
    res.sendFile(path.resolve('views/clarke.html'))
})
app.get('/hamilton',(req,res)=>{
    res.sendFile(path.resolve('views/hamilton.html'))
})
app.get('/hopper',(req,res)=>{
    res.sendFile(path.resolve('views/hopper.html'))
})
app.get('/lovelace',(req,res)=>{
    res.sendFile(path.resolve('views/lovelace.html'))
})
app.get('/turing',(req,res)=>{
    res.sendFile(path.resolve('views/turing.html'))
})

/*
/ -> Debe direccionar al recurso index.html.
/babbage -> Debe direccionar al recurso babbage.html
/berners-lee -> Debe direccionar al recurso berners-lee.html.
/clarke -> Debe direccionar al recurso clarke.html.
/hamilton -> Debe direccionar al recurso hamilton.html.
/hopper -> Debe direccionar al recurso hopper.html.
/lovelace -> Debe direccionar al recurso lovelace.html.
/turing-> Debe direccionar al recurso turing.html
*/