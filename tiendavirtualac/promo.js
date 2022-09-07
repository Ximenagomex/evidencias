const producto = require('./producto');


class promo {
    constructor(categoria, descuento) {
        this._categoria=categoria
        this._descuento=descuento
    }
    get categoria() {
    return this._categoria
}
    set categoria(categoria){
        this._categoria=categoria
        
    }
    get descuento(){
        return this._descuento
    }

    set descuento(descuento){
        this._descuento=descuento
    }
}


module.exports= promo;