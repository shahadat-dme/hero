// const numbers = [2,4,6,8,10];
// const output = [];

// for (const number of numbers){
//     const result = number * 3;
//     output.push(result)
// }
// console.log(output);


// function doubleOld(number){
//     return number * 2
// }

// const doubleIt = number => number * 3


const numbers = [2,4,6,8,10];
const output = [];

const doubleIt = number => number * 3 

for (const number of numbers){
    const result = doubleIt(number);
    output.push(result)
}
console.log(output);

const output2 = numbers.map(doubleIt)
console.log(output2);


// const numbers = [2,4,6,8,10];
// const doubleIt = number => number * 3
// const output3 = numbers.map(doubleIt)
const output3 = numbers.map(number => number * 3)
console.log(output3);


const nums = [7,22,2,28,98,202,102]
// const Square = mul => mul * 2;
// const num = nums.map(Square)
const num = nums.map(x => x * 2)
console.log(num);