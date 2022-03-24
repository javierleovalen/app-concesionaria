const autos = require('./autos');

let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };


let concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let autoBuscado = autos.filter(function(autos){
            return autos.patente === patente
        });
        if (autoBuscado.length === 0){
            return null;
        } else
        return autoBuscado[0];
        
    },
    venderAuto: function (patente) {
        const autos = this.buscarAuto(patente);
        if (autos) {
            autos.vendido = true;
        }
        return autos
    },
    autosParaLaVenta: function (autos) {
        return autos = this.autos.filter(function (autos) {
            return autos.vendido === false;
        })
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter((function (nuevo) {
            return nuevo.km < 100
        }))
    },
    listaDeVentas: function () {
        let ventas = this.autos.filter(function (patente) {
            return patente.vendido == true
        });
        let lista = [];
        ventas.forEach(function (costo) {
            lista.push(costo.precio);
        })
        return lista;
    },
    totalDeVentas: function (){
        const total = this.listaDeVentas().reduce(function(acum, elemento){

            return acum + elemento
        },0)
        return total;
    },
    puedeComprar: function (auto, persona) {
        if( (auto.precio <= persona.capacidadDePagoTotal) && ((persona.capacidadDePagoEnCuotas) >= (auto.precio/auto.cuotas)) )
        {
            return true;
        }

        return false;

     },

     autosQuePuedeComprar: function (cliente){
        let autosEnVenta = this.autosParaLaVenta();
        let autosParaCliente = autosEnVenta.filter((auto) =>
        this.puedeComprar(auto, cliente) === true);

        return autosParaCliente;
    }
};

// console.log(concesionaria.buscarAuto('JJK116'));        
// console.log(concesionaria.venderAuto('APL123'));
// console.log(concesionaria.venderAuto('JJK116'));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.puedeComprar(autos[0],persona));
// console.log(concesionaria.puedeComprar(autos[1],persona));

// console.log(concesionaria.autosQuePuedeComprar(persona));





