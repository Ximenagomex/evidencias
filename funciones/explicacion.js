/*funciones conjunto de instrucciones para hacer una tarea
sintaxis 
funtion nombre (parametros) {
    cuerpo 
} returns */

  //ejerccicio1 tipo de triangulo 
  
  function triangulo(num,num1,num2){
    if (num ==num1 && num1==num2){
      console.log('es un triangulo equilatero')
    } else if (num !=num1 && num1 !=num2){
      console.log('es un triangulo escalero')
  
    } else {
      console.log('es un triangulo isosceles')
    }
    
  } (triangulo(1,2,1))
  
  // teorema pitagoras 
  
  function teorema(c1 =2 ,c2 =2 ) {
    let cateto1 = c1 ** 2 
    let cateto2 = c2 ** 2
    let suma = cateto1 + cateto2
    let raiz =Math.sqrt(suma)
    return raiz
  
  }console.log(teorema())

  var t = Math.round(Math.random()*100)
console.log(t)

function temperaturafa(t) {
  var tem = (1.8 * t) + 32; 
  return tem;
}

function temperaturak(t){
  var tem1 = t + 273.15;
  return tem1;
}

function temperaturar(t){
  var tem2 = (1.8 * t)+ 491.67;
  return tem2;
}


var tem= temperaturafa(t)
console.log(`${t} ºc = ${tem}ºf`);
var tem1= temperaturak(t)
console.log(`${t} ºc = ${tem1}ºk`);
var tem2= temperaturar(t)
console.log(`${t} ºc = ${tem2}ºr`);



  
  
  //funcion flecha estructura 
  const saludar=()=>{
    return `Hola Soacha querida`;
  } 
  console.log(saludar())
  
  //funcion flecha sin parametros 
  const saludar1=()=> `Hola Soacha`;
  console.log(saludar1())
  
  //funcion con parametros 
  const saludar2=nombre=> `Hola ${nombre} bienvenido a Soacha`;
  console.log(saludar2('Ximena'))
  
 