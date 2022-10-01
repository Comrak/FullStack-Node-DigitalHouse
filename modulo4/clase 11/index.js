//importar express
const { application } = require('express')
const express = require('express')
const path = require('path')
//instanciar express 
const server = express()
//definir carpeta publica
const PUBLICFOLDER = path.resolve('public')
server.use(express.static(PUBLICFOLDER))
//escuchamos un puerto 
const numeroPuerto = 1234
server.listen(numeroPuerto,(error)=>{
    if(error){
        return console.log('error',error)
    }
    console.log('servidor levantado')
})

server.get('/',(req,res)=>{
    res.sendFile(path.resolve('views/index.html'))
})
