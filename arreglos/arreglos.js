
//explicacion en clase array 

let x = []
x[0]=100;
x[1]=50;
x[2]='sena';

console.log(x)

//otra forma 

let x= new Array();
x[0]='hola'
x[1]='como'
x[2]='estas'

//  ejercicios 
let vector=[];
let tamaño=Math.round((Math.random()*20-10)+10);
console.log('valor de la variable tam',tamaño)
let mayor =[];
let meno=[];
sum=0;
for (let i =0; i < tamaño; i++){
    vector[i]=Math.round(Math.random()*100);
} console.log(vector)

for (let i =0; i < vector.length; i++){
    sum +=vector[i]
} console.log('la suma de los elementos es ',sum)

sum=sum/tamaño 
console.log('el promedio es ',sum)

for (let i =0; i < vector.length; i++) {
  if(vector[i] > mayor) 
  mayor = vector[i]
 } console.log('el mayor es ',mayor)  


for (let i =0; i < vector.length; i++) {
    if(vector[i] < meno)
     meno = vector[i]
  } console.log('el mayor es ',meno)  


  let raicescuadrada=[];
for (let i =0; i < vector.length; i++){
    raicescuadrada[i]=Math.sqrt(vector[i])
}              
console.log(raicescuadrada)


for (let i =0; i< vector.length; i++){
    if (vector[i]%2==0) {
        console.log('es par',vector[i])
    } else {
        console.log('es impar',vector[i])
    }
}

//SUMA Y NUMERO MAYOR Y MENOR 
for (let i =0; i < tamaño; i++){
    vector[i]=Math.round(Math.random()*100);
} console.log(vector)

for (let i =0; i < tamaño; i++) {
  if(vector[i] > mayor) 
  mayor = vector[i]
 } console.log('el mayor es ',mayor)  


for (let i =0; i < tamaño; i++) {
    if(vector[i] < meno)
     menor = vector[i]
  } console.log('el menor es ',menor)

 // BUSCAR ELEMENTO DENTRO DE UN ARREGLO
  
  for (let i =0; i < tamaño; i++){
    vector[i]=Math.round(Math.random()*100);
} console.log(vector)

console.log('el elemento de esta posicion es',vector[4]); 

//ordenamiento 

let v=[];
let sum =0;
  let t=Math.round((Math.random()*20-10)+10);
  console.log('valor de la variable tam',t)

  for (let i =0; i < t; i++){
    v[i]=Math.round(Math.random()*100);
} console.log(v)

for ( let i =0; i < (v.length -1); i++) {
  for ( let j = i +1 ; j <(v.length); j++) {
    if (v[i] > v[j]) {
      let reeplaza=v[j] 
      v[j] = v[i]
      v[i]=reeplaza;
    }
  }

} console.log(v)




