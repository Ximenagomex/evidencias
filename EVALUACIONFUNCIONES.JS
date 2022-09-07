
let array=[];
let tamaño=Math.round((Math.random()*25-5)+5);
console.log('valor de la variable tam',tamaño)
function arreglo(array,tamaño) {
  for (let i =0; i < tamaño; i++){
    array[i]=Math.round(Math.random()*100);
  } console.log(array) 
}
    arreglo(array,tamaño)
    //media 
    let media=0
    //se necesita el tamaño y el arreglo con los valores que estan arriba ,para que nos lo muestre
  function mediador(array,tamaño,media){
      let sum=0;  
  for (let i =0; i < array.length; i ++){
      sum+=array[i]
  } console.log('la suma de los elementos',sum)
  media =sum/tamaño
  //se divide por la cantidad de elementos que hay  con esto sacamos la media
  console.log('la media es ',media)}
    mediador(array,tamaño,media)

    //diferencias
    let dife=[];
    function diferencias(dife,array,tamaño,media){
    let sobrante=0;
    let faltante=0;
    for (let i =0; i < tamaño; i++){
        for ( let j = i  ; j <(media); j++) {
        if (media[j] > array[i]) { 
       faltante = media[j] - array[i]
       dife [i]= faltante
        } else {
           faltante = array[i] - media[j]
           dife [i]= faltante
     }
    } 
}
    console.log ("el vector es ["+dife+"] el sobrante es"+ sobrante  +"el faltante es"+ faltante)
} 
 diferencias(dife,array,tamaño,media)
 


 /*for ( let i =0; i < (vector.length -1); i++) {
    for ( let j = i +1 ; j <(vector.length); j++) {
      if (vector[i] > vector[j]) {
        let reeplaza=vector[j] 
        vector[j] = vector[i]
        vector[i]=reeplaza;
      }
    }
  
  } console.log(vector)*/