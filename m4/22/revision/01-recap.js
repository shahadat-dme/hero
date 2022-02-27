function largestNumbers(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element > max){
            max = element
        }
    }
    return max
}

const maximum = largestNumbers([7,4,3,2,8])
console.log(maximum);


// function smallestNumbers(numbers){
//     let min = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i]
//         if(element < min){
//             min = element
//         }
//     }
//     return min
// }

// const minimum = smallestNumbers([7,4,3,2,8])
// console.log(minimum);