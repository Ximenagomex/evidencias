

// clases 
//objetos tienen  estados y comportamientos 
//las variables tradicionales solo tienen estado 
class Animal {
constructor(name,apellido){ 
    this._name = name;
    this._apellido = apellido;
    
}
get name(){
    return this._name;
}

set name(name){
 this._name = name;
}


} 
//llamar crear objeto
var object = new Animal('dog','torres'); //new se activa el constructor //es importante el tipo de dato
console.log(object)
//modificar el nombre 
object.name ='cat'
console.log(object)
//agrego 
object.apellido = 'gomez'
console.log(object)


//MISION 
//escriba metodos para suma,promedio,menor,mayor
//mirar el vector repo 
//escriba una class que represente un producto comercial. Debe tener constructor set, get y un metodo para calcular el 
//valor antes y despues con el iva  
// pagina 149-161
               
    class Numeros{
        constructor(vector){
            this._vector=vector;
        }
        llenarVector(tam){
            for (let i = 0; i < tam; i++) {
            this._vector[i]=Math.round(Math.random()*100)
             
            }
        } 
        mediador(vec,tam,media){
            let sum=0;  
            for (let i =0; i < vec.length; i ++){
            sum+=vec[i]
        } console.log('la suma de los elementos',sum)
            media =sum/tam
            console.log('la media es ',media)}
        
            
        menor(vec){
            var restante = vec.length;
            minimun = vec[restante-1];
            while (restante--){
                if(vec[restante] < minimun){
                        minimun=vec[restante]
                    }
                }
                return minimun;
            }

        mayor(vec) {
            var a = vec.length;
            maxim = vec[a-1];
            while (a--){
                if(vec[a] > maxim){
                    maxim = vec[a]
                }
            }
                    return maxim;
        }
       
         get vector(){
            return this._vector;
        }

    }

    let vec=[]
    let tam=Math.round((Math.random()*25-5)+5);
    console.log('valor de la variable tam',tam)
    let sum =0
    let media=0  
    let ob=new Numeros(vec);
    ob.llenarVector(tam);
    console.log(ob.vector);
    ob.mediador(vec,tam,media)
    ob.menor(vec)
    var m = ob.menor(vec);
    console.log(m)
    var minimun =0
    var maxim=0
    ob.mayor(vec)
    var ma =ob.mayor(vec)
    console.log(ma)


    //2

    class productos {
        constructor(producto,precio) {
            this._producto = producto;
            this._precio = precio;
        }

        iva(iva,precio,producto) {
            iva = precio * (19/100)
            return iva
        } 

        get producto(){
            return this._producto;
        }
        
        set producto(producto){
         this._producto = producto;
        }
    } 

    let producto='carne'
    let precio=3000
    let iva=0;
    let p=new productos(producto,precio)
    console.log(p)
    console.log(`el producto ${producto} con el precio ${precio} mas el iva es de`,(p.iva(producto,precio,iva)))



class produto{
    constructor(product,subtotal) {
    this._product=product;
    this._subtotal=subtotal;
    }

valor(product,subtotal,ivva){
     let total = subtotal+ivva
    return total
}
sinValor(product,subtotal,ivva){
    let totall=ivva-subtotal
    return totall
}
}
let product='zapatos'
let subtotal=80000
let ivva=1.19
let pr=new produto(product,subtotal)
console.log(pr)
console.log('valor del producto con iva')
console.log(pr.valor(product,subtotal,ivva))
console.log('el valor sin iva es de ')
console.log(pr.sinValor(product,subtotal,ivva))

//ejercicios de libro class 
//1. Cree una clase para Person que incluya el constructor para firstname y apellido

class person {
    constructor(nombre,apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
    }
}
let pr1= new person('Jaider','Avendaño')
console.log('hola',pr1)
let pr2= new person('Sofia','Gomez')
console.log('hola',pr2)

//ejemplos del libro
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    greet() {
    console.log("Hi there!");
    }
    compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
    }
   }
   let pe=new Person()
   //enviar parametros al metodo
   let compliment =pe.compliment("Harry", "hat");
    console.log(compliment);


// ejercicio1 
    class person {
        constructor(nombre,apellido) {
            this._nombre=nombre;
            this._apellido=apellido;
        }
        nombreCompleto(nombre,apellido) {
            return nombre + ' ' +apellido
        }
    }
    let n1=new person()
    let nombreCompleto=n1.nombreCompleto('anderson','barrera')
    console.log(nombreCompleto)
    let n2=new person()
    let nombreCompleto1=n2.nombreCompleto('ximena','avendaño')
    console.log(nombreCompleto1)


//ejemplo libro
class Person {
    #firstnam;
    #lastnam;
    constructor(firstnam, lastnam) {
    if(firstnam.startsWith("M")){
        this.#firstnam = firstnam;
        } else {
        this.#firstnam = "M" + firstnam;
        }
        this.#lastnam = lastnam;
        }
    }
 //pendiente/
   

   

   class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    }
    get firstname() {
    return this.#firstname;
    }
    set firstname(firstname) {
    if(firstname.startsWith("M")){
    this.#firstname = firstname;
    } else {
    this.#firstname = "M" + firstname;
    }
    }
    get lastname() {
    return this.#lastname;
    }
    set lastname(lastname) {
    this.#lastname = lastname;
    }
   }
   let a = new Person("Maria", "Saga");
  console.log(a.firstname);
  console.log(a.lastname)
  //actualiza 
  a.firstname = 'sofia'
  console.log(a.firstname)

  //heredacion
  class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
   
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
    }
    move() {
    console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
    this.currentSpeed += amount;
    }
   }

   class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
    }
    doWheelie() {
    console.log("Driving on one wheel!");
    }
   }
   let motor = new Motorcycle("Black", 0, 250, "gasoline");
    console.log(motor.color);
    motor.accelerate(50);
    motor.move();

    //ejercicio2
    class per {
        constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        }
        saludar() {
        console.log("¡Hola!");
        }
       }
       per.prototype.introduce = function () {
        console.log("Hola, soy", this._nombre);
       };
       per.prototype.favoriteColor = "rojo";

       let i = new per('karen','martinez')
       console.log(i)
       //llamo a funcion
       i.introduce()
       console.log('mi color favorito es',i.favoriteColor)

//ejercicio3
class especie {
    constructor(nombre,sonido){
        this._nombre=nombre;
        this._sonido=sonido;
    }
    animal(nombre,sonido){
        console.log('hola soy ',this._nombre,'y mi sonido es',this._sonido)
    }
}

         let e=new especie('gallina','pio')
         e.animal()
         //2. Agrega un prototipo con otra acción para el animal.
        especie.prototype.introduce = function (num1,num2) {
            return num1 + num2
        };
        console.log('el numero 1 y numero 2 al sumarlos da ',e.introduce(2,2))
                


