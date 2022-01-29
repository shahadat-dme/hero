// var i = 0;
// while ( i < 10 ){
//     console.log(i)
//     if(i == 5){
//         break;
//     }
//     i++;
// }

var numbers = [54,35,21,98,23,101,45,78]
for (var i = 0; i <numbers.length; i++){
    var number = numbers[i]
    if(number > 90 ){
        continue
    }
    console.log(number)
}