class Vehiculo {
    constructor(Nro_serie,marca,año,precio) {
        this._Nro_serie=Nro_serie;
        this._marca=marca;
        this._año=año;
        this._precio=precio
    }

}

class camionetas extends Vehiculo{
    constructor(Nro_serie,marca,año,precio,Kilometraje,capacidad) {
     super(Nro_serie,marca,año,precio)
     this._kilometraje=Kilometraje;
     this._capacidad=capacidad;
    }
}

class autosCompactos extends Vehiculo{
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros){
    super(Nro_serie,marca,año,precio)
    this._cantidad_pasajeros=cantidad_pasajeros;
    }
}

class autosLujos extends autosCompactos {
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros,caballo_fuerza) {
    super(Nro_serie,marca,año,precio,cantidad_pasajeros)
    this._caballo_fuerza=caballo_fuerza;

    }

}

class vagonetas extends autosCompactos{ 
    constructor(Nro_serie,marca,año,precio,cantidad_pasajeros,sistema_frenos){
        super(Nro_serie,marca,año,precio,cantidad_pasajeros)
        this._sistema_frenos=sistema_frenos;
    }

}


let c=new camionetas(23,'chebrolet',2012,2000,'2500km','40kg')


camionetas.prototype.toString = function camioneString(){
    var retorno = "El numero de serie es: " + this._Nro_serie + " con marca " + this._marca +
     "del año " + this._año + " con precio de " + this._precio + "con un kilometraje de " + this._kilometraje + 
     "con capacidad de  " + this._capacidad; 
    return retorno;

}
console.log(c.toString())
drawBox(green);

//EDITORIAL DE LIBRO 
class editorial {
    _publicaciones = []
    constructor(nombre, nit) {
        this._nombre = nombre;
        this._nit = nit;
    }
    agregar(publicacion) {
        this._publicaciones.push(publicacion)

    }
    get publicaciones() {
        return this._publicaciones
    }
}

class publicacion {
    constructor(titulo, precio) {
        if (typeof(titulo) === 'string') {
            this._titulo = titulo;
        } else {
            console.log(`${titulo} no es admitido`)
        }
        if (typeof(precio) === 'number') {
            this._precio = precio;
        } else {
            console.log(`${precio} no es admitido`)
        }
    }
}


class libro extends publicacion {
    constructor(titulo, precio, num_pag) {
        super(titulo, precio);
        if (typeof(num_pag) === 'number') {
            this._num_pag = num_pag;
        }
    }
}


class cd extends publicacion {
    constructor(titulo, precio, tiempo) {
        super(titulo, precio);
        if (typeof(tiempo) === 'number') {
            this._tiempo = tiempo;
        }
    }
}
let obj = new editorial('Negrete', '12345');
let obj1 = new libro('Satanas', 20000, 260);
let obj2 = new libro('Un diablo en la botella', 4000, 50);
let obj3= new libro('A traves de mi ventana', 40000, 280)
let obj4= new libro('el principe', 50000,254)
obj.agregar(obj1);
obj.agregar(obj2);
obj.agregar(obj3);
obj.agregar(obj4);


console.log(obj.publicaciones)








/*function Perro(nombre,criadero,color,sexo) {
    this._nombre=nombre;
    this._criadero=criadero;
    this._color=color;
    this._sexo=sexo;
 }
 
 ePerro = new Perro("Gabby","Laboratorio","chocolate","femenino")

 Perro.prototype.toString = function perroToString() {
    var retorno = "Perro " + this._nombre + " es " + this._sexo + " su color es " + this._color + " " + this._criadero;
    return retorno;
  }
  console.log(ePerro.toString())*/
