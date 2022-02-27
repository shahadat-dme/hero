function largestElement(num){
    let smallKeep = num[0];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element < smallKeep){
            smallKeep = element 
        }
    }
    return smallKeep
}
const smallNumber = largestElement([4,2,5])
console.log(largestNumber);