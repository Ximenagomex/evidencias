class persona {
    #nombre   //definir el atributo protegido 
    #apellido
    constructor(nombre,apellido){
        this.#nombre=nombre;
        this.#apellido=apellido;
    }
    get nombre(){  //se puede ver el valor del atributo atravez del get 
        return this.#nombre
    }
    get apellido(){
        return this.#apellido
    }
}

let ob=new persona('Ximena','Gomez');
console.log(ob.nombre, ob.apellido)