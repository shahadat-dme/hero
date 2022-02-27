function sumArr(x){
    let sum = 0;
    for(let i = 0; i < x.length; i++){
        const element = x[i]
        sum = sum + element;
    }
    return sum
}
const total = sumArr([2,77,22,3,44,55,66,77,8,99,88,66,44,55,33,22])
console.log(total);

const total2 = sumArr([44,33,24,56]);
console.log(total2);