// function isLeapYear(year){
//     if(((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0)){
//         return true
//     }
//     else {
//         return false
//     }
// }
// const myYear = 2001;
// const isMyYearLeapYear = isLeapYear(myYear)
// console.log(isMyYearLeapYear);


// function leapYear(year){
//     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// const isleapYear = leapYear(2000)
// console.log(isleapYear);


// function isLeap(year) {
//     return new Date(year, 1, 29).getDate() === 29;
// }

const isLeap = year => new Date(year, 1, 29).getDate() === 29;
const isleapYear = isLeap(2001)
console.log(isleapYear);
