const producto = require('./producto');
class categoria {
    _listaproductos=[]
    constructor(nombre) {
        this._nombre=nombre
    }
    composicion(codigo,nombre, precio){
        let com=new producto(codigo,nombre, precio)
        this._listaproductos.push(com)

    }
    get listaproductos(){
        return this._listaproductos
    }

    get nombre(){
        return this._nombre
    }

    buscarprecio(producto){
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                return a.precio
        }
    } 
}
    buscarnombreprod(producto){
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                return a.nombre
        }
    }


} 


    buscarproducto(producto){
        for (let i=0; i<this._listaproductos.length; i++){
            let a=this._listaproductos[i]
            if (producto==a.nombre){
                return producto
        }
    }
}
}

module.exports =categoria;





