const template = (arrayNombre)=>{
    return `Hola soy, ${arrayNombre[0]}, disfruto ${arrayNombre[1]} y soy de ${arrayNombre[2]}.`
}

/*
function template(arrayNombre){
    return 'Hola soy '+arrayNombre[0]+' disfruto ' + arrayNombre[1] + ' y soy de ' + arrayNombre[2]
}
*/

module.exports = template;