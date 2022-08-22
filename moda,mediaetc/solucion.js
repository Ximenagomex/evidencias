let vector=[];
let sum =0;
let sumatoria =0;
let desviacion =0;
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

// mediana
if (vector.length%2==0) {
    mediana=(vector[(Math.floor(vector.length/2))-1]+vector[(Math.floor(vector.length/2))])/2
} else {
    mediana=(vector[Math.floor(vector.length/2)])
}

console.log(mediana)

//moda 
var moda = [0,0]
for (let i = 0; i < vector.length; i++) {
    repeticiones = 0
    for (let j = 0; j < vector.length; j++) {
        if (vector[i]==vector[j]) {
            repeticiones++;
        } 
    }
    if (repeticiones > moda[1]) {
        moda[0]=vector[i]
        moda[1]=repeticiones
    }
}

console.log(`el numero que mas se repite es ${moda[0]}`)



