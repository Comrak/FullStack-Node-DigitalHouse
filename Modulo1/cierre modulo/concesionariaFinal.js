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
   },
   totalDeVentas: function(){
    let listaPreciosAutosVendidos = this.listaDeVentas()
    let totalVentas = listaPreciosAutosVendidos.reduce((accum, precio) => accum + precio, 0);
    return totalVentas
   },
   puedeComprar: function(auto,persona){
    return (persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas) && persona.capacidadDePagoTotal >= auto.precio)
   },
   autosQuePuedeComprar: function(persona){
    let autosEnVenta = this.autosParaLaVenta()
    let autosEnVentaPuedenComprar =[]
    autosEnVenta.forEach(auto => {
        if(this.puedeComprar(auto,persona)){
            autosEnVentaPuedenComprar.push(auto)
        }
    });
    return autosEnVentaPuedenComprar
   }
}

let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
} 
console.log(concesionaria.autosQuePuedeComprar(persona))