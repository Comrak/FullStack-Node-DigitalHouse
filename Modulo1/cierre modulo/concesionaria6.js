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
   },
   autosNuevos: function(){
      let autosAVender = this.autosParaLaVenta()
      let autosAVender0KM = autosAVender.filter(auto=>auto.km < 100)
      return autosAVender0KM     
   },
   listaDeVentas: function(){
    let autosVendidos = autos.filter(auto=>(auto.vendido))
    let listaDePrecios = autosVendidos.map(function(auto){
        return auto.precio 
    })
    return listaDePrecios
   }
}

console.log(concesionaria.listaDeVentas())