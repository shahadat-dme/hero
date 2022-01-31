const num = -5
const output = Math.abs(num)
console.log(output);

const num1 = 5.00001
const output1 = Math.ceil(num1)
console.log(output1);

const num2 = 5.90001
const output2 = Math.floor(num2)
console.log(output2);

const num3 = 5.6000
const output3 = Math.round(num3)
console.log(output3);


const output4 = Math.random()*10;
// const round = Math.floor(output4)
const round = Math.round(output4)
console.log(round);

console.log();

for(let i = 0; i <= 20; i++){
    const output4 = Math.random()*10;
// const round = Math.floor(output4)
const round = Math.round(output4)
console.log(round);
}