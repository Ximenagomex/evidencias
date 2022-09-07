class usuario1 {
    #nombre
    #apellido
    #correo
    #ntel
    #direccion
    #contraseña
    #usuario
    constructor(nombre, apellido,correo,ntel,direccion,contraseña,usuario){
    this.#nombre=nombre
    this.#apellido=apellido
    this.#correo=correo
    this.#ntel=ntel
    this.#direccion=direccion
    this.#usuario=usuario
    this.#contraseña=contraseña
    }
    get nombre() {
        return  this.#nombre
    }
    get apellido() {
        return  this.#apellido
    }

    get correo() {
        return  this.#correo
    }
    get ntel() {
        return  this.#ntel
    }
    get direccion() {
        return  this.#direccion
    }
    get contraseña(){
        return this.#contraseña
    }

    set nombre(nombre) {
        this.#nombre = nombre
    }
    set apellido(apellido) {
        this.#apellido = apellido
    }
    set correo(correo) {
        this.#correo = correo
    }
    set ntel(ntel) {
        this.#ntel = ntel;
    }
    set direccion(direccion) {
        this.#direccion = direccion
    }
    set contraseña(contraseña) {
        this.#contraseña = contraseña;
    }
    
}




module.export =usuario1