function Factorial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i
    }
    return fact
}
var f = Factorial(5)
console.log(f);

var l = Factorial(6)
console.log(l);