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
   },
   autosParaLaVenta: function(){
      let autosAVender = autos.filter(auto=>(!auto.vendido))
      return autosAVender
   }
}
console.log(concesionaria.autosParaLaVenta())