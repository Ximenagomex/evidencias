
//si necesito pasar una cadena tengo que ponerla ese argumento la funcion general y en cb1 pasar la cadena 


var cade='XIMiNa'
setTimeout(() => {
    console.log('la cadena a evaluar de cuantas mayusculas tiene es :  ',cade) 
}, 0);
function contarMayusculas() {
var contar = 0;
var mayusculas =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'] 
var as =cade.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < mayusculas.length; x++) {
    if(as[i]==mayusculas[x]){
    contar+=1;
    }
    }
    } return contar;

   } 
   //console.log('el total de mayusculas es de',contarMayusculas())
   


   let caden= 'XImenA'
   setTimeout(() => {
    console.log('la cadena a evaluar de cuantas minusculas tiene es :  ',caden)
   }, 3000 );
   function Minusculas() {
    let contar = 0;
    let minusculas =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let as =caden.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < minusculas.length; x++) {
    if(as[i]==minusculas[x]){
    contar+=1;
    }
    }
    } return contar;
   }
   //console.log('las minusculas de la cadena',Minusculas())


function general(cb1,cb2){
    setTimeout(() => {
    console.log('las mayusculas de la cadena  son : ',cb1());
    let pas=caden.toLocaleLowerCase()
    console.log('cadena pasada a minusculas : ',pas)
}, 1000);

setTimeout(() => {
    console.log('las minusculas de la cadena son : ',cb2())
    let p=caden.toLocaleUpperCase()
    console.log('la cadena pasada a mayusculas :',p)
}, 4000)

}
general(contarMayusculas,Minusculas)





function contarMayusculas(cade) {
var contar = 0;
var mayusculas =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'] 
var as =cade.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < mayusculas.length; x++) {
    if(as[i]==mayusculas[x]){
    contar+=1;
    }
    }
    } return contar;

   } 
   //console.log('el total de mayusculas es de',contarMayusculas())
   


   
   function Minusculas(cade) {
    let contar = 0;
    let minusculas =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let as =cade.split('')
    for (let i = 0; i < as.length; i++) {
    for (let x = 0; x < minusculas.length; x++) {
    if(as[i]==minusculas[x]){
    contar+=1;
    }
    }
    } return contar;
   }
   //console.log('las minusculas de la cadena',Minusculas())


function general(cb1,cb2,cade){
    cb1()
    cb2()
    console.log('las mayusculas de la cadena  son : ',cb1(caden.toLocaleLowerCase()));
    console.log('cadena pasada a minusculas : ',cb2(cade.toLocaleUpperCase()))
}
general(contarMayusculas,Minusculas,'HoaL')





