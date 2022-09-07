class producto{
    contador = 1
    #codigo
    #nombre
    #precio
    #disponibilidad
    constructor(nombre, precio,cantidad,disponibilidad){
        this.#codigo = this.contador;
        this.#nombre = nombre;
        this.#precio = precio;
        this._cantidad = cantidad;
        this.#disponibilidad = disponibilidad;
        this.contador += 1;
    }
    get codigo(){
        return this.#codigo
    }
    get nombre (){
        return this.#nombre
    }
    get precio(){
        return this.#precio
    }
    get cantidad(){
        return this.cantidad
    }  
      get disponibilidad(){
        return this.#disponibilidad
    }
    get contador(){
        return this.contador
    }
    
}
module.export = producto