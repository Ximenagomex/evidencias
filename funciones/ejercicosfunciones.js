
//1 condiconales 

var numero1 = Math.round(Math.random()*20);
console.log(numero1)
var numero2 = Math.round(Math.random()*20);
console.log(numero2)
var numero3 = Math.round(Math.random()*20);
console.log(numero3)

function valormedio(numero1,numero2,numero3) {
if (numero2 > numero1 == numero2 < numero3) {
  console.log(numero2);
} else if (numero1 > numero2 == numero1 < numero3) {
  console.log(numero1);
  }  else {
    console.log(numero3);
 }
} 
valormedio(numero1,numero2,numero3);

//2
var num = 0 
var num = Math.round(Math.random()*9999)

function cifras(num) {
console.log(num)
if (num < 10 ) {
  console.log('Tiene una cifra :',num)
} else if (num < 100) {
  console.log('Tiene dos cifras :',num)
} else if (num < 1000) {
  console.log ('Tiene tres cifras :',num)
} else if (num < 10000) {
  console.log ('Tiene cuatro cifras :',num)
} else {
  console.log ('Esta excedientp al limite')
}
} 
cifras(num)

//3

function horas(num) {
  if (num ==40){
    let sueldo = num * 2600
    console.log(`su sueldo es ${sueldo}`)
  } else if (num >=40) {
    let extras = num - 40 
    let sueldo1 = 40 * 2600
    let total = (extras * 5000) + sueldo1
    console.log('su sueldo es ',total)
}
} horas(50)

//4
var respuesta1= Math.floor(Math.random()*2);
var respuesta2= Math.floor(Math.random()*2);
var respuesta3= Math.floor(Math.random()*2);


function juego(respuesta1,respuesta2,respuesta3){ 

var pregunta1 = '¿colon descubrio america ?';
var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
var pregunta3 = '¿the doors fue un grupo de rock americano?';

console.log(pregunta1)

if (respuesta1 == 1) {
  console.log ('respuesta : si')  
  console.log(pregunta2);
  if (respuesta2 == 1) {
    console.log ('respuesta : si')  
  console.log(pregunta3)
  if (respuesta3==2){
    console.log ('respuesta : no')  
  console.log('ganaste')
  }else {
    console.log ('respuesta : si')  
    console.log('a salido del juego')
    
}
 } else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}
} else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}
}
juego(respuesta1,respuesta2,respuesta3);

//5 
var grados = Math.round(Math.random()*360)
console.log('los grados son ',+grados) 
var pin = 3.1416
var radianes = (grados * pin )/180
function angulo(grados,radianes) {
if (grados <=90) {
  console.log('se encuentra el primer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=180) {
  console.log ('se encuentra el segundo cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <= 270) {
  console.log('se encuentra el tercer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=360) {
  console.log('se encuentra el cuarto cuadrante, sus grados convertidos en radianes es de ',radianes)
} 
} angulo(grados,radianes)


//funciones flecha 


var numero1 = Math.round(Math.random()*20);
console.log(numero1)
var numero2 = Math.round(Math.random()*20);
console.log(numero2)
var numero3 = Math.round(Math.random()*20);
console.log(numero3)

 valormedio=(numero1,numero2,numero3)=> {
if (numero2 > numero1 == numero2 < numero3) {
  console.log(numero2);
} else if (numero1 > numero2 == numero1 < numero3) {
  console.log(numero1);
  }  else {
    console.log(numero3);
 }
} 
valormedio(numero1,numero2,numero3);

//2
var num = 0 
var num = Math.round(Math.random()*9999)

cifras=num=> {
console.log(num)
if (num < 10 ) {
  console.log('Tiene una cifra :',num)
} else if (num < 100) {
  console.log('Tiene dos cifras :',num)
} else if (num < 1000) {
  console.log ('Tiene tres cifras :',num)
} else if (num < 10000) {
  console.log ('Tiene cuatro cifras :',num)
} else {
  console.log ('Esta excedientp al limite')
}
} 
cifras(num)

//3
horas=num=> {
  if (num ==40){
    let sueldo = num * 2600
    console.log(`su sueldo es ${sueldo}`)
  } else if (num >=40) {
    let extras = num - 40 
    let sueldo1 = 40 * 2600
    let total = (extras * 5000) + sueldo1
    console.log('su sueldo es ',total)
}
} 
horas(50)

//4
var respuesta1= Math.floor(Math.random()*2);
var respuesta2= Math.floor(Math.random()*2);
var respuesta3= Math.floor(Math.random()*2);


juego=(respuesta1,respuesta2,respuesta3)=>{ 

var pregunta1 = '¿colon descubrio america ?';
var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
var pregunta3 = '¿the doors fue un grupo de rock americano?';

console.log(pregunta1)

if (respuesta1 == 1) {
  console.log ('respuesta : si')  
  console.log(pregunta2);
  if (respuesta2 == 1) {
    console.log ('respuesta : si')  
  console.log(pregunta3)
  if (respuesta3==2){
    console.log ('respuesta : no')  
  console.log('ganaste')
  }else {
    console.log ('respuesta : si')  
    console.log('a salido del juego')
    
}
 } else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}
} else {
    console.log ('respuesta : no')  
    console.log('a salido del juego')

}
}
juego(respuesta1,respuesta2,respuesta3);

//5
var grados = Math.round(Math.random()*360)
console.log('los grados son ',+grados) 
var pin = 3.1416
var radianes = (grados * pin )/180
angulo=(grados,radianes)=> {
if (grados <=90) {
  console.log('se encuentra el primer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=180) {
  console.log ('se encuentra el segundo cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <= 270) {
  console.log('se encuentra el tercer cuadrante, sus grados convertidos en radianes es de ',radianes)
} else if (grados <=360) {
  console.log('se encuentra el cuarto cuadrante, sus grados convertidos en radianes es de ',radianes)
} 
} 
angulo(grados,radianes)


//MODA,MEDIA,MEDIANA

let vector=[];
let sum =0;
  let tamaño=Math.round((Math.random()*20-10)+10);
  console.log('valor de la variable tam',tamaño)

  for (let i =0; i < tamaño; i++){
    vector[i]=Math.round(Math.random()*100);
} console.log(vector)

for ( let i =0; i < (vector.length -1); i++) {
  for ( let j = i +1 ; j <(vector.length); j++) {
    if (vector[i] > vector[j]) {
      let reeplaza=vector[j] 
      vector[j] = vector[i]
      vector[i]=reeplaza;
    }
  }

} console.log(vector)

for (let i =0; i < vector.length; i ++){
    sum+=vector[i]

} console.log('la suma de los elementos',sum)

let media =sum/tamaño
console.log('la media es ',media)
//moda 
var lista = [1, 2, 4, 3, 4, 3, 5, 4, 6, 8, 9]
var tamañoo = 0;
var moda = [0]

for (let i = 0; i < lista.length; i++) {
    let contador = 0
    for (let a = 0; a < lista.length; a++) {
        if (lista[i] - lista[a] == 0) {
            contador += 1
        }
    }
    for (let i = 0; i < lista.length; i++) {
      let contador = 0
      for (let a = 0; a < lista.length; a++) {
          if (lista[i] - lista[a] == 0) {
              contador += 1
          }
      }
    
}
}













