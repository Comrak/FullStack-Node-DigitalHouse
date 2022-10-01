//importar express
const { application } = require('express')
const express = require('express')
const path = require('path')
//instanciar express 
const server = express()
//escuchamos un puerto 
const numeroPuerto = 1234
server.listen(numeroPuerto,(error)=>{
    if(error){
        return console.log('error',error)
    }
    console.log('servidor levantado')
})

server.get('/',(req,res)=>{
    res.send('ALOOOHAAA')
})

server.get('/Ariel',(req,res)=>{
    res.send('<p><bold>Ariel puto me quedaste mal</bold></p>')
})

server.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname,'/Untitled-1.js'))
})