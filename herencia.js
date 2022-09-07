//HERENCIA 
class Persona {
    constructor(nombre,documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    get nombre(){
        return this._nombre;
}
    get documento(){
    return this._documento;
}

    set nombre(nombre){
        this._nombre=nombre;
    }
    set documento(documento){
        this._documento=documento;
    }
}


class Aprendiz extends Persona {
    constructor(nombre,documento,ficha){
        super(nombre,documento);
        this._ficha=ficha;
    }
    get ficha(){
        return this._ficha;
}
    set ficha(ficha){
    this._ficha=ficha;
}
   imprimirTodos(){
    console.log(this._nombre)
    console.log(this._documento)
    console.log(this._ficha)
   }


}
let ob1 =new Persona('ximena',192465); //objeto es una instancia
console.log(ob1);
let ob2=new Aprendiz('Anderson Barrera',746574,'ADSI')
console.log(ob2);
ob2.imprimirTodos()
ob2.nombre='david'
ob2.imprimirTodos()

//EJERCICIO HERENCIA 
class tecnologia {
    constructor(pulgadas,memoria,marca,precio){
        this._pullgadas=pulgadas;
        this._memoria=memoria;
        this._marca=marca;
        this._precio=precio;
        }
    
        iv() {
          let  iv = this._precio * (19/100) //si nececsito utilizar los datos del contructor en el metodo debo de llamarlos con this 
            return iv
        } 
    
}
let t=new tecnologia(234,17,'huawei',2000);
console.log(t)
console.log(t.iv())

class computador extends tecnologia {
    constructor(pulgadas,memoria,marca,precio,discoduro){
    super(pulgadas,memoria,marca,precio)
    this._discoduro=discoduro;
    }
}

let t1=new computador(3233,76,'hp',3000,'disco solido')
console.log(t1)
console.log(t1.iv())