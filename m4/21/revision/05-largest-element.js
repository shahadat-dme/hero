function largestElement(numbers){
    // let largest = 0;
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest
}
const ages = [12,45,24,26,52,42]
const oldest = largestElement(ages)
console.log(oldest);

const oldest2 = largestElement([22,285,72,12,45,24,26,52,42])
console.log(oldest2);

const oldest3 = largestElement([-22,-285,-72,-12,-45,-24,-26,-52,-42])
console.log(oldest3);