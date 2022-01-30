// even
function isEven(number){
    if(number % 2 == 0){
        return true
    }
    return false
}
const myNumber = 1641;
const isMyNumber = isEven(myNumber)
console.log(isMyNumber);

const herNumber = 1642;
const isHerNumber = isEven(herNumber)
console.log(isHerNumber);

// odd
function isOdd(number){
    if(number % 2 != 0){
        return true
    }
    return false
}
const myNumberOdd = 1641;
const isMyNumberOdd = isOdd(myNumberOdd)
console.log(isMyNumberOdd);

const herNumberOdd = 1642;
const isHerNumberOdd = isOdd(herNumberOdd)
console.log(isHerNumberOdd);