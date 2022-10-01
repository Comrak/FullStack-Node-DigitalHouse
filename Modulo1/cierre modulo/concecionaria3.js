/* requerir módulo autos */
const autos = require("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      let autoEncontrado = autos.find(auto=>auto.patente === patente)
      return (typeof autoEncontrado!=='undefined')?autoEncontrado:null
   },

   venderAuto:function(patente){
      let autoVendido = this.buscarAuto(patente)
      if(autoVendido != null){
         autoVendido.vendido = true
      }
   }
}
console.log(autos)
concesionaria.venderAuto('JJK116')
console.log(autos)