console.log('hola')
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


//condicionales 3
var num = 0 
var num = Math.round(Math.random()*9999)
console.log(num)
if (num < 10 ) {
  console.log('Tiene una cifra :',num)
} else if (num < 100) {
  console.log('Tiene dos cifras :',num)
} else if (num < 1000) {
  console.log ('Tiene tres cifras :',num)
} else if (num < 10000) {
  console.log ('Tiene cuatro cifras :',num)
} else {
  console.log ('Esta excedientp al limite')
}

//2
var valor1 = Math.round(Math.random()*5)
console.log(valor1)
var valor2 = Math.round(Math.random()*5)
console.log(valor2)
var valor3 = Math.round(Math.random()*10)
console.log(valor3) 

if (valor1==valor2 && valor1 == valor3) {
  console.log('los tres valores son iguales')
} else if (valor1 !=valor2 && valor1 == valor3) {
  console.log('dos valores son iguales')
} else if (valor1 !=valor2 && valor1 !=valor3) {
  console.log('los tres valores son distintos')
} 
 else if (valor2 == valor1 && valor2 != valor3) {
  console.log('hay dos valores son iguales')
}else if (valor3 == valor2 && valor3 != valor1) {
  console.log('hay dos valores iguales')
}


var respuesta= 'si';
var negacion = 'no';

var pregunta1 = '¿colon descubrio america ?';
var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
var pregunta3 = '¿the doors fue un grupo de rock americano?';

if (pregunta1 == respuesta) {
  console.log(pregunta1,'la siguiente pregunta es ',pregunta2)
} else if (pregunta2 == respuesta) {
  console.log('la siguiente pregunta es ',pregunta3) 
  console.log('ganaste')
} 


var billete=Math.round(Math.random()* 1000000)
console.log(billete)
 var cincuenta =0;
 var veinte =0;
 var diez =0;
 var cinco =0;
 var dosmil =0;
 var mil =0;
 var sobra =0;

 if(billete>50000){
    cincuenta=Math.trunc(billete/50000)
    billete=billete%50000
    
 }
 if (billete>20000){
   veinte=Math.trunc(billete/20000)
   billete=billete%20000}

  if (billete>10000){
    diez=Math.trunc(billete/0000)
    billete=billete%10000}

      if (billete>5000){
        cinco=Math.trunc(billete/5000)
        billete=billete%5000}
        
          if (billete>2000){
            dosmil=Math.trunc(billete/2000)
            billete=billete%2000}

            if (billete>1000){
                mil=Math.trunc(billete/1000)
                sobra=billete%1000}
                

 console.log(cincuenta,'billetes de 50 mil')
 console.log(veinte,'billetes de 20 mil')
 console.log(diez,'billetes de 10 mil')
 console.log(cinco,'billetes de 5 mil')
 console.log(dosmil,'billetes de 2 mil')
 console.log(mil,'billetes de mil')
 console.log(sobra,'en monedas')

//
var num = Math.round(Math.random()*10000000)
console.log('la cantidad de segundos es',num)

if (num >=0) {
  var horas =Math.trunc(num / 36000)
  num = num%3600 } else {
    horas= 0
  }
  if (num !=0) { 
    var min = Math.trunc (num/60)
    num = num%60

  } else {
    horas=0
  }
  if (num !=0) {
      var seg =num
  } else {
    min=0
  } 
  console.log(horas,':',min,':',seg)
 
//
var num1 =Math.floor(Math.random()*1000)
console.log(num1)
var v1 = num1/ 3
var v2 =v1 * 3
console.log('la base es : ',v1)
console.log('la altura es :',v1) 
console.log('la profundida ',v1)

console.log('el valumen del cubo es ',v2)







