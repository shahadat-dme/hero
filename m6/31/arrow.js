// Function Declaration
function add(num1, num2){
    return num1 + num2
}
const addCall = add(4+2)
console.log(addCall);

//function Expression
const add2 = function add2(num1, num2){
    return num1 + num2
}
const addCall2 = add2(4+1)
console.log(addCall2);

// Anonymous Function
const add3 = function (num1, num2){
    return num1 + num2
}
const addCall3 = add3(4+7)
console.log(addCall2);

//Arrow
const add4 = (num1 , num2) => num1 + num2;
const addCall4 = add4(17+31)

const add5 = (num1 , num2, num3) => num1 + num2 + num3;
const addCall5 = add5(17+31+54)

const add6 = num => num * 10;
const addCall6 = add6(17)

const add7 = () => "Shahadat";
const addCall7 = add7()

const doMath = (x,y) =>{
    const sum = x + y;
    const div = x - y;
    const output = sum + div
    return output;
}

const total = doMath(12,27);
console.log(total);

document.getElementById('my-btn').addEventListener(event => {
    
})