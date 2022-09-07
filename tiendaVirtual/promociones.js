const producto = require('./producto'); //porque no sea a usado new
class promocion{
    _productos = []
    constructor(cantidad_descuento){
        this._cantidad_descuento = cantidad_descuento;
    }
    get cantidad_descuento(){
        return this._cantidad_descuento;
    }
    set cantidad_descuento(cantidad_descuento){
        this._cantidad_descuento = cantidad_descuento;
    }
    agreagar_producto(producto){
        this._productos.push(producto);
    }
}

module.exports = promocion;


/*funcion que reciba al carrito y que calcule el valor de la compra 
funcion descuento 
funcion que permita saber que la plata le alcanza 
calcula el precio de la cuenta, y le diga si le alcanza o cuanto le sobra*/