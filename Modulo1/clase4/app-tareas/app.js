
const fs = require('fs');
let param = String(process.argv[2])
console.log(process)
console.log(process.argv)
if(param.toLowerCase()  == 'listar'){
    let rawdata = fs.readFileSync('tareas.json');
    let tareas = JSON.parse(rawdata);   
    console.log(tareas);
    tareas.push({titulo:'joder',estado:'no iniciado'})
    console.log(tareas);

    let data = JSON.stringify(tareas)
    fs.writeFileSync('tareas.json',data)    
}else if(param.toLowerCase().trim()  == '' || param == null || param == 'undefined' || param == undefined ){
    console.log('ah me pasas cosas vacias, cagon')
}else{
    console.log('QUEEEEEEEEEEEEEEEE ???')
}


