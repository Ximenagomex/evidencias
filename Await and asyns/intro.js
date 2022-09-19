//AWAIT AND ASYNS 
/*asíncrona talk()
tres veces seguidas sin interrupción. Cada una de estas llamadas de función está esperando la
función decir algo(). La función decirAlgo() contiene una nueva Promesa
que se está resolviendo con una función setTimeout() que espera dos segundos antes
resolviendo con el valor de algo más x. Así que después de dos segundos, los tres
las funciones se realizan al mismo tiempo (o eso parece al ojo humano).*/
function decirAlgo(x) {
    return new Promise (resolve => {
    setTimeout(() => {
        resolve('algo '+ x)
    }, 2000); 
})  
 }
    
    async function hablar(x) {
    const palabras = await decirAlgo(x);
    console.log(palabras);
   }
   hablar(2);
   hablar(4);
   hablar(8)


//
   async function arreglo(){
    let vector=[];
    let tamaño=Math.round((Math.random()*20-10)+10);
    console.log('valor de la variable tam',tamaño)
            for (let i =0; i < tamaño; i++){
                vector[i]=Math.round(Math.random()*100);
            } console.log(vector)
}

