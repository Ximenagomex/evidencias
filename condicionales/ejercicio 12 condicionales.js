
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
 