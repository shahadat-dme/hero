function add(num1, num2=0){

    // Option 1
    // num2 = num2 || 0;

    // console.log(num1, num2);

    //option 1
    // if(num2 == undefined){
    //     num2 = 0
    // }
    const total = num1 + num2;
    return total;
}
const result = add(22,55)
console.log(result);


function fullName(first, last="Khan"){
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Sharukh')
// const name = fullName('Sharukh' , 'Khan')
console.log(name);