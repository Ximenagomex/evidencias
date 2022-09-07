const producto = require('./producto');
const categoria= require('./categoria')
const promo=require('./promo');
const catalogo = require('./catalogo (1)');
class carrito{
    _productos = [];
    constructor(productos){
        this._productos = productos;
    }
    get productos(){
        return this._productos;
    }
    agreagar_producto(producto){
        this._productos.push(producto);
    }
    get productos(){
        return this._productos
    }
}

carrito.agreagar_producto(catalogo.listacatalogo)
carrito.agreagar_producto()


module.exports = carrito;