
function calculo(){
    var poblacion =Math.round((Math.random()*10000-1000)+1000);
    console.log('el numero de poblacion es ',poblacion);
    poblacion = poblacion * (1 + 0.3)^20
    console.log(poblacion)
}

calculo()


var tp =Math.round((Math.random()*10000-1000)+1000);

    for (var i = 1; i < 11; i++){
    console.log( 'Año ',i)
    console.log('el tamaño de la poblacion es ',tp)
    var na=Math.round((Math.random()*(tp*10/100)))
    console.log('los nacimientos ',na)
    var mu=Math.round((Math.random()*(tp*3/100)))
    console.log('las muertes ',mu)
    var tc=(na*mu)/tp
    console.log('la tasa de crecimiento ',tc)
    
            var total = tp * (1 + tc) ^ i
            console.log('total de la poblacion con crecimiento',total)
    console.log('=============== =============== ==============')
}
    

//promesas 

function casa(total){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        total = (total * 10)/100
        console.log('al 10% de la poblacion se le daran casa',total)
        resolve()
    }, 2000);

})
}
//casa(total)


function porcetaje(tp,total){
    return new Promise(resolve => {
        setTimeout(() => {
       var p=(total*100)/tp 
       p = p - 100
        console.log(`la poblacion inicia es ${tp}  \n tendra un porcentaje de crecimiento neto ${p}%`)
        resolve()
        }, 4000);

    })
}

//porcetaje(tp,total)

async function dosfuntion() {   
    const pb10 = await casa(total);
    const cr = await porcetaje(tp,total);
 }

 dosfuntion()





