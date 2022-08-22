var x = Math.round((Math.random()*5-1)+1);
console.log('base',x)
var n = Math.round((Math.random()*5-1)+1);
console.log('exponente',n)

var m = 1;

for (var i = 1; i < n; i++) {
    m = m * x
}
console.log(m);