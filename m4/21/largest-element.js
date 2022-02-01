function largestElement(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element > largest){
            largest = element
        }
        
    }
    return largest
}

const ages = [14,15,16,17,21]
const large = largestElement(ages)
console.log(large);