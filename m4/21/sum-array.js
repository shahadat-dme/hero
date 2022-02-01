// const num = [44,55,77,22,11]
// let sum = 0;
// for (let i = 0; i <num.length; i++){
//     const element = num[i]
//     sum = sum + element;
// }
// console.log(sum);

function arrayTotal (num){
    let sum = 0;
    for (let i = 0; i <num.length; i++){
        const element = num[i]
        sum = sum + element;
        
    }
    return sum
}
const total = arrayTotal([14,21,12])
console.log(total);