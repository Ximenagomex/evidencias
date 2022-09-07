const administrador = require('./administrador')
class tiendavirtual {
    #nombre
    #administradores = []
    #usuarios = []
    _catalogos = []
    _promociones = []
    _preferencias = []
    constructor(nombre){
        this.#nombre=nombre
    }
    get nombre() {
        return  this.#nombre
    }
    administradores(nombre, apellido,correo,ntel,lineaAtencion,direccion,usuario,contraseña){
        this.#administradores.push(new administrador(nombre, apellido,correo,ntel,lineaAtencion,direccion,usuario,contraseña));
    }
    usuario(objeto){
        this.#usuarios.push(objeto);
    }
    agregar_catalogo(categoria){
        this._catalogos.push(new this._catalogos(categoria))
    }
}

module.exports=tiendavirtual