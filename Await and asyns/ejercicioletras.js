var cade='XIMiNa'
function contarMayusculas(cade) {{
return new Promise((resolve,reject)=>{
var contar = 0;
var mayusculas =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'] 
var as =cade.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < mayusculas.length; x++) {
    if(as[i]==mayusculas[x]){
    contar+=1;
    }
    }
    } 
    setTimeout(() => {
        resolve(cade) 
        console.log('la cadena a evaluar de cuantas mayusculas tiene es :  ',cade)
        console.log('el numero de mayusculas que tiene es de : ',contar)
    }, 0);

   })
}}
//contarMayusculas(cade)

async function conta(cade){
    const result= await  contarMayusculas(cade)
    setTimeout(() => {
        let pas= result.toUpperCase() 
         console.log('cadena pasada a mayusculas : ',pas)
    }, 1000);
}

conta(cade)
   //console.log('el total de mayusculas es de',contarMayusculas())

 var elMinusculas=cade=>{{
    return new Promise((resolve,reject)=>{
    let contar = 0;
    let minusculas =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let as = cade.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < minusculas.length; x++) {
    if(as[i]==minusculas[x]){
    contar+=1;
    }
    }
    } setTimeout(() => {
        resolve(cade)
        console.log('la cadena a evaluar de cuantas minusculas tiene es :  ',cade)
        console.log('el numero de minusculas que tiene es de : ', contar)
       }, 3000 );
       return cade
   } )
}

 }


 
async function cm(cade){
    const rm= await  elMinusculas(cade)
    setTimeout(() => {
        let pas= rm.toLowerCase() 
         console.log('cadena pasada a minusculas  : ',pas)
    }, 1000);
}

cm(cade)