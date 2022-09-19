setTimeout(()=> {
    console.log('Amo Soacha ')
},2000)


function externa(){
    console.log('funcion externa ')
}

setTimeout(externa,5000)

const funcionexter=()=>{
    console.log('fucnion externs flecha')
}

setTimeout(funcionexter,3000)

setInterval(()=>{
    console.log('se repite')
},3000)

let timeint =setInterval(()=> console.log('Amo el sena'),2000)



//despues de 5 segundos vaa parar 
setTimeout(()=>{
    clearInterval(timeint)
},7000)


//escrib un programa que muestre un contador de 1 hasta 10 donde cada numero se muestre cada 2 segundos

for(let i=0; i<10; i++){
setTimeout(() => {
    console.log(i)
}, i*2000);
}

//ejercicio 
//porque con var se ejecuta solo el ultimo valor ejecuta primero el for y toma el valor maximo 
for (var i=0; i<10; i++){
    setInterval(()=>{  //
        console.log(i)
    },2000);
}



