//length or index

// const num = [22,44,57,77,92];
// for(let i = 0; i < num.length; i++){
//     console.log(i);
// }

/*
const num = [22,44,57,77,92,-92];
let sum =  0;
for(let i = 0; i < num.length; i++){
    const element = num[i]
    // console.log(element);
    sum = sum + element;
    // console.log(sum);
}
console.log(sum);
*/

// function arrSum(num){
//     let sum = 0;
//     for(let i = 0; i < num.length; i++){
//         const element = num[i]
//         sum = sum + element
//     }
//     return sum;
// }
// const total = arrSum ([22,55,64,26,24,25])
// console.log(total);


// Practice
// const num2 = [2,25,42,66]
// let total2 = 0;
// for (let i = 0; i < num2.length; i++){
//     const elm = num2[i]
//     total2 = total2 + elm
// }
// console.log(total2);

function sumTotal(x){
    let sum = 0;
    for(let i = 0; i < x.length; i++){
        const elementF = x[i]
        sum = sum + elementF
    }
    return sum;
}
const totalF =  sumTotal([5,4,3])
console.log(totalF);