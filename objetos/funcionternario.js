//TRABAJO EN CLASE FUNCIONES, OBJETOS
//OPERADOR TERNARIO 
function primo(num) {
    var conta=0;
    for (let i =1; i < num; i++) {
        num%i==0? conta++ : conta=conta;
    }

if (conta >2){
    return `no primo`
} else {
    return `primo`
}
}
console.log(primo(12))


//escriba una funcion que lea un cadena de texto que cuente las vocales, y consolantes y cuales no son ninguna de las dos 


function texto(cadena) {
    var cont1=0;
    var cont2=0;
    var vocales=['a','e','i','o','u']
    var consonates=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    for ( let i =0; i < ( cadena.length); i++) {
        for ( let u =0; u < vocales.length; u++)
          if (cadena[i] == vocales.length ) {
            cont1=cont1 + 1 
          }
        } 
    for ( let a =0; a <  consonates.length; a++) {
        if(cadena[i] == consonates[a]) {
            cont2=cont2+1
        }
        
      
      } 
    } //recorra a cadena 

    





// funciones nuevas 
let myGreeting = 'Hey there!';

console.log(myGreeting.toLowerCase());

//posicion especifica

let nombre='ximena'

let nuevo = nombre[0].toUpperCase();
console.log(nuevo)

//todo mi nombre 
let todo = nombre.slice(1);

console.log(todo );
//unido 
let unido = nuevo + todo;
console.log(unido )


//objetos =coleccion de datos 

let persona= {
    nombre:'XIMENA',
    id:102232,
    datoscompletos:()=>console.log (`${persona.nombre} ${persona.id}`)
}

console.log(persona.nombre)
console.log(persona['id'])
persona.datoscompletos();
//agregar 
persona.direccion='calle 31'
console.log(persona)
persona.nombre='jaider'
console.log(persona)

//para eliminar= nombre del objeto, . la clave a eliminar 

delete persona.id;
console.log(persona) 

//OBJETOS 
//generar 4 figuras geometricas, con sus propiedades y funtion con area, perimetro 

let cuadrado={
    lado1: 2,
    lado2: 2,
    perimetro:()=> {
        let perimetro = cuadrado.lado1 * cuadrado.lado2 
        return perimetro
    }, 
    area:()=>{
        let area = cuadrado.lado1 * cuadrado.lado2 
        return area
    }

} 
console.log(cuadrado.perimetro())
console.log(cuadrado.area())


// circulo 
let circulo={
    radio:2,
    pi:3.1416,
    def:2,
    perimetro:()=> {
        let perimetro = circulo.def * circulo.pi * circulo.radio
        return perimetro
    }, 
    area:()=>{
        let area = circulo.pi * (Math.pow(circulo.radio,2))
        return area
    }
} 
console.log(circulo.perimetro())
console.log(circulo.area())


//pentagono 

let p={
    l1:5,
    l2:5,
    apotema:2.5,
    perimetro:()=>{
        let pe = p.l1 * p.l2
        return pe
    }, 
    area:()=>{
        let ar= (p.perimetro()*p.apotema)/2
        return ar
    }
} 
console.log(p.perimetro())
console.log(p.area())


//rectangulo 

let rectangulo={
    lo:4,
    a:2,
    per:()=> {
        let p = (2*rectangulo.a) + (2*rectangulo.lo)
        return p
    },
    ar:()=>{
        let ar= rectangulo.a * rectangulo.lo
        return ar 
    }

} 
console.log(rectangulo.per())
console.log(rectangulo.ar())

//otra forma de if *DATO*
//condicion / console.log lo verdadero/ lo falso




