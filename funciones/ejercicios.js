 // 1 ejercicios condicionales en funciones 
  
  function horas(num) {
    if (num ==40){
      let sueldo = num * 2600
      console.log(`su sueldo es ${sueldo}`)
    } else if (num >=40) {
      let extras = num - 40 
      let sueldo1 = 40 * 2600
      let total = (extras * 5000) + sueldo1
      console.log('su sueldo es ',total)
  }
  } horas(50)
  
  // 2 condionales 
  
  var numero =Math.round(Math.random()*9999)
  console.log(numero)
  
  function cifra1(numero) {
    if (numero <10) {
      console.log(`tiene una cifra ${numero}`)
    } else if (numero <100) {
      console.log(`tiene dos cifras ${numero}`)
  
    } else if (numero <1000) {
      console.log(`tiene tres cifras ${numero}`)
  
    } else if (numero <10000) {
      console.log(`tiene cuatro cifras ${numero}`)
  
    }
  } cifra1(numero)


//3 condicionales 
function numeromedio(numero1,numero2,numero3) {
if (numero2 > numero1 == numero2 < numero3) {
    console.log(numero2);
} else if (numero1 > numero2 == numero1 < numero3) {
    console.log(numero1);
}  else {
    console.log(numero3);
}
} numeromedio(2,4,6)

//4
const pin = 3.1416 
function cuadrante(grados) {
    if (grados <=90) {
        var radianes = (grados * pin )/180
        console.log('se encuentra el primer cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <=180) {
        console.log ('se encuentra el segundo cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <= 270) {
        console.log('se encuentra el tercer cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <=360) {
        console.log('se encuentra el cuarto cuadrante, sus grados convertidos en radianes es de ',radianes)
      }
} cuadrante(160)


//5

function billete(billete) {
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
    
} billete(100000)
 
 //ejercicios condicionales en flecha 1
  
 var horas =num=> {
    if (num == 40){
      let sueldo = num * 2600
      console.log(`su sueldo es ${sueldo}`)
    } else if (num >=40) {
      let extras = num - 40 
      let sueldo1 = 40 * 2600
      let total = (extras * 5000) + sueldo1
      console.log('su sueldo es ',total)
  }
  
    } 
  horas(50)


// 2 
var numero =Math.round(Math.random()*9999)
  console.log(numero)
    cifra1=numero=> {
    if (numero <10) {
      console.log(`tiene una cifra ${numero}`)
    } else if (numero <100) {
      console.log(`tiene dos cifras ${numero}`)
  
    } else if (numero <1000) {
      console.log(`tiene tres cifras ${numero}`)
  
    } else if (numero <10000) {
      console.log(`tiene cuatro cifras ${numero}`)
  
    }
  } 
  cifra1(numero)

  //3 
   numeromedio=(numero1,numero2,numero3)=> {
    if (numero2 > numero1 == numero2 < numero3) {
        console.log(numero2);
    } else if (numero1 > numero2 == numero1 < numero3) {
        console.log(numero1);
    }  else {
        console.log(numero3);
    }
    } 
    numeromedio(2,4,6)

//4 
var grados = Math.round(Math.random()*360)
console.log('los grados son ',+grados) 
var pi =3.1416

cuadrante=grados=> {
    if (grados <=90) {
        var radianes = (grados * pi )/180
        console.log('se encuentra el primer cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <=180) {
        console.log ('se encuentra el segundo cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <= 270) {
        console.log('se encuentra el tercer cuadrante, sus grados convertidos en radianes es de ',radianes)
      } else if (grados <=360) {
        console.log('se encuentra el cuarto cuadrante, sus grados convertidos en radianes es de ',radianes)
      }
} 
cuadrante(grados);

//5 
 billete=billete=> {
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
       
   } 
   billete(2000350)
    
    
// EJERCICIOS CICLOS 1
function operacion(x = 3,n =3) {
    let total =1
        for (var i =1; i<=n; i ++) {
          total =total * x 
        }
        return total
      } console.log(operacion())
//2 

function nnatural(num) {
var suma = 1;
var x = 2
var contador = 0;
var num = Math.round(Math.random() * 100);
console.log(num)
while (num > suma) {
    suma += x;
    console.log(suma, '+', x)
    x += 1;
    contador += 1
}  return contador;
} console.log(nnatural())

//3

function perfecto(num){
    let suma =0;
    for (let i =1; i < num; i++){
      if (num%i==0){
           suma +=1  
        }
    }
      if (suma==num){
    return `${num} es perfecto`
  } else {
    return `${num} no es perfecto`
  }
  } 
  console.log(perfecto(20))


//4 
function divi(num1){
var num1 = Math.round(Math.random()*100);
var divisores = [];
console.log(num1)
for (var i = 0; i<=num1; i++){
    if ( num1%i == 0){
        divisores.push(i);
    }
}
if (divisores.length<3){
    console.log('es primo')
}else{
    console.log('no es primo');
}
 } divi()

//5 
function asteric(n) {
var n =Math.round(Math.random()* 100);
for (let i =0; i <= n ; i ++){
    let resultado ='';
    for(let j =1; j <=i; ++j){
        resultado +='*';
    } console.log(resultado)
} 
} asteric()

//funcion flecha ciclos  1
 operacion=(x = 3,n =3)=> {
    let total =1
        for (var i =1; i<=n; i ++) {
          total =total * x 
        }
        return total
      } 
      console.log(operacion()) 

//2 
  nnatural=num=> {
    var suma = 1;
    var x = 2
    var contador = 0;
    var num = Math.round(Math.random() * 100);
    console.log(num)
    while (num > suma) {
        suma += x;
        console.log(suma, '+', x)
        x += 1;
        contador += 1
    }  return contador;
    } 
    console.log(nnatural())

//3 
   perfe=num1=> {
  var num1 = Math.round(Math.random()*50);
  console.log(num1)
  var divisores = [];
  var perfecto = 0;
  for (var i = 1; i<num1; i++){
      if ( num1%i == 0){
          perfecto = perfecto + i;
      }
  }
  if (perfecto == num1){
      console.log('es perfecto')
  }else{
      console.log('no es perfecto')
  }
} 
perfe()

//4
    divi=num1=>{
    var num1 = Math.round(Math.random()*100);
    var divisores = [];
    console.log(num1)
    for (var i = 0; i<=num1; i++){
        if ( num1%i == 0){
            divisores.push(i);
        }
    }
    if (divisores.length<3){
        console.log('es primo')
    }else{
        console.log('no es primo');
    }
     } 
     divi()

//5 
    asteric=n=> {
    var n =Math.round(Math.random()* 20);
    for (let i =0; i <= n ; i ++){
        let resultado ='';
        for(let j =1; j <=i; ++j){
            resultado +='*';
        } console.log(resultado)
    } 
    } 
    asteric()