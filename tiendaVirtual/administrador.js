const usuario1=require('./usuario1');
class administrador extends usuario1 {    
    #lineaAtencion;
    constructor(nombre, apellido,correo,ntel,lineaAtencion,direccion,usuario,contraseña){
    super(nombre, apellido,correo,ntel,direccion,usuario,contraseña)
    this.#lineaAtencion =lineaAtencion

    }
    get #lineaAtencion(){
        return this.#lineaAtencion
    }
}
module.export = usuario1;