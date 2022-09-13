function doSomething(callback) {
    callback();
   }
   function sayHi() {
    console.log("Hi!");
   }
   doSomething(sayHi);

   function judge(grade) {
    switch (true) {
    case grade == "A":
    console.log("You got an", grade, ": amazing!");
    break;
    case grade == "B":
    console.log("You got a", grade, ": well done!");
    break;
    case grade == "C":
    console.log("You got a", grade, ": alright.");
    break;
    case grade == "D":
    console.log("You got a", grade, ": hmmm...");
    break;
    default:
    console.log("An", grade, "! What?!");
    }
   }
   function getGrade(score, callback) {
    let grade;
    switch (true) {
    case score >= 90:
    grade = "A";
    break;
    case score >= 80:
    console.log(score);
    grade = "B";
    break;
    case score >= 70:
    grade = "C";
    break;
    case score >= 60:
    grade = "D";
    break;
    default:
    grade = "F";
    }
    callback(grade);
   }
   getGrade(85, judge);

// split 
   function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas
   }

   console.log(dividirCadena('maria ximena',' '))


//ejercicio de libro concurrecia 
function saludar(nombreCompleto){ 
    console.log('Hola',nombreCompleto)
}

function devolucion(nombreUsuario,callback){
    callback(nombreUsuario);
    var parte = nombreUsuario.split(' ')
    return parte
}

console.log(devolucion('Jaider Avendaño',saludar))


//setinterval 
setInterval(animar, 500);
function animar() {
 console.log("¡Lo estás haciendo muy bien, sigue adelante!");
}

//reloj 
 setInterval(()=> {
    console.log(new Date().toLocaleTimeString());
},1000)

