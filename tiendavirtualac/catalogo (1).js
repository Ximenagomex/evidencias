
const categoria = require('./categoria');
const producto = require('./producto');
var CuidadoCasa = new categoria('CuidadoCasa')
var Comestibles =new categoria('Comestibles')
var CuidadoPersonal = new categoria('Cuidadopersonal')

 var catalogo = {
    _listacatalogo:[CuidadoCasa,Comestibles,CuidadoPersonal],
    ingresarproductos(categoria,codigo,nombre, precio ){
        for (let i =0; i <this._listacatalogo.length ; i++){
            let a = this._listacatalogo[i]
            if (categoria==a.nombre){
            this._listacatalogo[i].composicion(codigo,nombre, precio)              
            }
        }
    },
     listacatalogo(){
         for (let i=0; i< this._listacatalogo.length; i++){
            let l = this._listacatalogo[i]
            console.log(`======= ${l.nombre} =========`)
            console.log(l.listaproductos)
       
    }

    },

    adicionarproducto(producto){
        for (let p=0; p<this.listacatalogo.length; p++){
            let p=this.listacatalogo[p]
            return p.buscarproducto(producto)
    }

 }
}


catalogo.ingresarproductos('CuidadoCasa',21,'Fabuloso',10000)
catalogo.listacatalogo()
catalogo.ingresarproductos('CuidadoCasa',23,'papelhigienico',17000)
catalogo.listacatalogo()


module.exports = catalogo


