//length or index

// const num = [22,44,57,77,92];
// for(let i = 0; i < num.length; i++){
//     console.log(i);
// }
/*
const num = [22,44,57,77,92];
let sum =  0;
for(let i = 0; i < num.length; i++){
    const element = num[i]
    // console.log(element);
    sum = sum + element;
    // console.log(sum);
}
console.log(sum);
*/

function arrSum(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        const element = num[i]
        sum = sum + element
    }
    return sum;
}
const total = arrSum ([22,55,64,26,24,25])
console.log(total);