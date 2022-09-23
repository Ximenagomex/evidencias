//promesi
function arreglo() {{
    return new Promise((resolve,reject)=>{
    let vector=[];
    let tamaño=Math.round((Math.random()*20-10)+10);
    console.log('valor de la variable tam',tamaño)
            for (let i =0; i < tamaño; i++){
                vector[i]=Math.round(Math.random()*100);
            } 
     resolve(vector) 
    })
}}        

async function array(){{
    const values= await arreglo()
    console.log(values)
     let sum=0 
     for (let i =0; i < values.length; i++){
      sum +=values[i]
     } console.log('la suma de los elementos es ',sum)
}
}

array()



 //ejercico de array 
 function arreglo() {{
    return new Promise((resolve,reject)=>{
    let vector=[];
    let tamaño=Math.round((Math.random()*20-10)+10);
    console.log('valor de la variable tam',tamaño)
            for (let i =0; i < tamaño; i++){
                vector[i]=Math.round(Math.random()*100);
            } 
     resolve(vector) 
    })
}}        
async function v () {
    const vec= await arreglo()
    console.log(vec)
    let sum=0 
    for (let i =0; i < vec.length; i++){
        sum +=vec[i]
    } console.log('la suma de los elementos es ',sum)

}

v()
