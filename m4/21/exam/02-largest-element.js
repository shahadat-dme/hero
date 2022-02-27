function largestElement(num){
    let largestKeep = num[0];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element> largestKeep){
            largestKeep = element 
        }
    }
    return largestKeep
}
const largestNumber = largestElement([4,2,5,77,88,92,34,52,1])
console.log(largestNumber);