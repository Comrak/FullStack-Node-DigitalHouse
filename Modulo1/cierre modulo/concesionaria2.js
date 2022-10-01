/* requerir módulo autos */
const autos = require("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      let autoEncontrado = autos.find(auto=>auto.patente === patente)
      return (typeof autoEncontrado!=='undefined')?autoEncontrado:null
   }
}