/*
importando modulos
*/
const SUMAR = require('./sumar')
const RESTAR = require('./restar')
const MULTIPLICAR = require('./multiplicar')
const DIVIDIR = require('./dividir')

/* 
Ejecutar la función que permite sumar y la función que permite restar, pasando como
argumentos dos números cualesquiera. Mostrar en consola los resultados.
*/
console.log(SUMAR(4,9))
console.log(RESTAR(6,8))

/* 
Ejecutar la función que permite multiplicar, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado.
*/
console.log(MULTIPLICAR(5,7))
console.log(MULTIPLICAR(0,7))
console.log(MULTIPLICAR(5,0))

/* 
Ejecutar la función que permite dividir, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado.
*/
console.log(DIVIDIR(5,9))
console.log(DIVIDIR(0,9))
console.log(DIVIDIR(5,0))