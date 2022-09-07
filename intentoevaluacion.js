//inteto evaluacion
function arreglo() {
let array=[];
let sum=0;
var sobrante=0
var faltante=0;
var dife=[]
  let tamaño=Math.round((Math.random()*25-5)+5);
  console.log('valor de la variable tam',tamaño)
  
  
 for (let i =0; i < tamaño; i++){
    array[i]=Math.round(Math.random()*100);
} console.log(array)
//media 
for (let i =0; i < array.length; i ++){
    sum+=array[i]

} console.log('la suma de los elementos',sum)

let media =sum/tamaño
console.log('la media es ',media)
//diferencias
for (let i =0; i < tamaño; i++) {
  console.log(array[i])

  if (array.length[i + 1] == array.length[i]) {
    if (media > array.length) {
   sobrante = media - array.length
   dife.push(sobrante)
   console.log(`segun la media el sobrante es ${sobrante}`)
    } else if (array.length > media) {
       faltante = array.length - media
       dife.push(faltante)
       console.log(`para llegar a la media le falta ${faltante}`)

 }
}  
} 

}  
arreglo()



function diferencias() {
  for (let i =0; i < tamaño; i++) {
    console.log(array[i])
  }
} 
diferencias()


/*var sobrante=0
var faltante=0;
var dife=[];

function diferencias(array) {
  for (let i =0; i<array.length; i++) {
          if (array.length[i + 1] == array.length[i]) {
             if (media > array.length) {
            sobrante = array.length - media 
            console.log(`segun la media el sobrante es ${sobrante}`)
             } else if (array.length < media) {
                faltante = media - array.length
                console.log(`para llegar a la media le falta ${faltante}`)
         
          }
        }  
        } return dife.push(sobrante,faltante)
       
    } 
diferencias()*/

var sobrante=0
var faltante=0;
var dife=[];

function diferencias(array) {
  for (let i =0; i<array.length; i++) {
    console.log(array[i])
  }
}
          if (array.length[i + 1] == array.length[i]) {
             if (media > array.length) {
            sobrante = array.length - media 
            console.log(`segun la media el sobrante es ${sobrante}`)
             } else if (array.length < media) {
                faltante = media - array.length
                console.log(`para llegar a la media le falta ${faltante}`)
         
          }
        }  
         return dife.push(sobrante,faltante)
       
    
diferencias()






