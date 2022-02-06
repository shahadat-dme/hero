// for(let i = 1; i <= 6 ; i++){
//     console.log(i);
// }

function consoleNum(i){
    if(i > 5){
        return;
    }
    console.log(i);
    consoleNum(i+1)
}
consoleNum(5)