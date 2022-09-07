const producto= require('./producto');
class preferencia{
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
}

module.export = preferencia;