// function fibonacciSeries(num){
//     const fibo = [0,1]
//     for(let i= 2; i <= num; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2]
//     }
//     return fibo;
// }
// const fiboSeries = fibonacciSeries(17);
// console.log(fiboSeries);


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'Please give a number';
    }
    else if( num < 2){
        return 'Please Enter A positive number greater then 2'
    }
    const fibo = [0,1]
    for(let i= 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(3);
console.log(fiboSeries);