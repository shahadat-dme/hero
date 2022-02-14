function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    // const result = num1 + num2;
    // return result 
    return result 
}
const sum = addNumbers(23, 13,100,420,77,22);
console.log(sum);