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