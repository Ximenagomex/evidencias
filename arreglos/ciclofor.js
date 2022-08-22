//incremento de 2, 

for (var i=1; i<=10; i+=2){
    console.log(i)
}

//disminuyendo 

for (var j=5; j>=50; i+=2){
    console.log(j)
}

//Ejercicio 2 Imprime el número y la suma de todos los múltiplos de 7 entre 1-100

for (var i=1; i<=100; i++){
    console.log(i)
    if (i%7==0){
        console.log('los multiplos de 7 son ',i)
    }
}

//recorrer arreglo 

var familia=['diana','jaider','sofia','fabio','coffe']
console.log(familia)
for (var i=0; i<familia.length; i++){
    console.log('mi familia esta conformada por  ', familia[i])
}


//numeros pares de un ramgo 2-20

for (var i=2; i<=20; i++){
    if (i%2==0){
        console.log('la cantidad de pares es ',i)

    } else {
        console.log('la cantidad de impares es ',i)
    }
}  

//objeto recorrer 
//SE INTERACTUA CON LAS PROPIEDADES MUESTRA LA PROPIEDAD Y SU VALOR 

var gym = {
    maquinaria : ['mancuernas','barras','discos','maqunas'],
    divicion : ['pesas','cardio','baile'],
    musculos : ['pierna','glueteo','brazo','espalda']
}  
for (var propiedad in gym){
    console.log(propiedad + " = " + gym[propiedad])
}

console.log(gym)

//while 

var i=1;

while(i <=20){
    console.log(i)
    i++;
}


//// evaluacion 
// primer
let vector=[];
let mayor=[];
let contador=0;
let contador1=0;
let contador2=0;
  let tamaño=Math.round((Math.random()*20-5)+5);
  console.log('valor de la variable tam',tamaño)

  for (let i =0; i < tamaño; i++){
    vector[i]=Math.round(Math.random()*100);
} console.log(vector)
//segundo
let vector1=[];
  let tam=Math.round((Math.random()*20-5)+5);
  console.log('valor de la variable tam',tam)

  for (let i =0; i < tam; i++){
    vector1[i]=Math.round(Math.random()*100);
} console.log(vector1)

//tercero 
let vector2=[];
  let t=Math.round((Math.random()*20-5)+5);
  console.log('valor de la variable tam',t)

  for (let i =0; i < t; i++){
    vector2[i]=Math.round(Math.random()*100);
} console.log(vector2)


// cual es el mayor 
  if(tamaño > tam == tamaño > t) {
    console.log('el arreglo mayor es ',tamaño)
  } else if (tam > tamaño == tam > t) {
    console.log('el arreglo mayor es ',tam)
  } else if (t > tamaño == t > tam) {
    console.log('el arreglo mayor es ',t)
  }

  //rellenar 
  console.log('el numero de elementos es')
  vector.length
  console.log('1',vector)
  vector1.length
  console.log('2',vector1)
  vector2.length
  console.log('3',vector2)

  


