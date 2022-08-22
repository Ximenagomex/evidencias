var suma=1; 
var x =2 ;
var y =0;

var numero1 = Math.round(Math.random()*50);
console.log(numero1)

while (numero1 > suma ) {
  var suma = suma + x 
  console.log (suma, '+',x)
  var x = x+1
  var y = y+1   
} console.log('la cantidad es de ',y)

var horas = Math.round(Math.random()*24)
console.log('la hora es',horas)
var minutos = Math.round(Math.random()*59)
console.log('los minutos son',minutos)
var segundos = Math.round(Math.random()*59)
console.log('con segundos',segundos)

segundos = segundos + 1

if (horas > 23) {
  horas == 0
} else if (minutos > 59) {
  minutos == 0
} else if (segundos >59) {
  segundos == 0 
  minutos + 1
}
  else if (minutos > 59) {
    minutos ==0
    horas + 1
  }  else if (horas > 23) {
     horas ==0
   }
console.log('la hora es ',horas, ':',minutos, ':',segundos)

