function smallElement(numbers){
    // let largest = 0;
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest
}
const ages = [12,45,24,26,52,42]
const smallNum = smallElement(ages)
console.log(smallNum);

const smallNum2 = smallElement([22,285,72,12,45,24,26,52,42])
console.log(smallNum2);

const smallNum3 = smallElement([-22,-285,-72,-12,-45,-24,-26,-52,-42])
console.log(smallNum3);