

let frutas = {
    nombre:['mora','uva'],
    precio : [233,2133]
    
}  
console.log('las frutas que hay son ',frutas.nombre)


const x = {};

x.foo = 'bar';

console.log(x)
////

const y = [];

y.push('foo');

console.log(y);

//asignar un nuevo valor 
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars)

cars[1]='chebrolet';
console.log(cars[1]);
console.log(cars)

//
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

// ejercicio de practica 
let compras = ['manzana','leche','pan']
console.log(compras)
console.log('el numero de elementos que hay es ',compras.length)

compras[2] ='Bananos'
console.log(compras) 

//Puede almacenar esta longitud en una variable como esta:
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

/* el dos indica el indice de la matrices para comezar agregar esos elementi, el cero indica el 
numero de elementos a borar*/
let arrOfShapes = ["círculo", "triángulo", "rectángulo", "pentágono"];
arrOfShapes.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrOfShapes);

//
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.shift[0];
delete arr8[0];

//
let animales = ["perro", "caballo", "gato", "ornitorrinco", "perro"];
console.log(animales)
let lastDog ​​= animales.lastIndexOf("perro");
console.log(lastDog)


//la matriz cambiará a un orden ordenado:
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names)
names.sort();
console.log(names)
names.reverse();
console.log(names)

//practica 
//1. Cree una matriz vacía para usar como lista de compras.
let compra =[];

//2. Agregue Leche, Pan y Manzanas a su lista.
compra.push('leche','pan','manzana')
 console.log(compra)
//3. Actualiza "Pan" con Bananas y Huevos.
compra[1]='Bananas y huevos';
console.log(compra)
//4. Retire el último elemento de la matriz y envíelo a la consola.
compra.pop(2)
console.log(compra)
//5. Ordene la lista alfabéticamente.
compra.sort();
console.log('lista ordenada',compra)
//6. Encuentre y genere el valor de índice de Milk. PENDIENTE 
//7. Después de los plátanos, agregue las zanahorias y la lechuga.
compra.splice(1, 0, "zanahoria", "lechuga");
console.log(compra);
//8. Cree una nueva lista que contenga Juice and Pop.
let nueva =['juice','pop']
console.log(nueva)
//9. Combine ambas listas, agregando la nueva lista dos veces al final de la primera lista.
let convinacion=compra.concat(nueva)
console.log(convinacion)
//10. Obtenga el último valor de índice de Pop y envíelo a la consola. PENDIENTE 
compra.indexOf(0,5)
var buscado =compra.indexOf('pop')
console.log(`esta en la poscion ${buscado}`)
//11. Su lista final debería verse así: