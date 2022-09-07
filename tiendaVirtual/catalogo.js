const producto = require('./producto');
class catalogo{
    _productos = [];
    constructor(categoria){
        this._categoria = categoria;
    }
    get categoria(){
        return this._categoria;
    }
    agreagar_producto(producto){
        this._productos.push(producto);
    }
    get productos(){
        return this._productos
    }
}

module.export = catalogo;