// function animalCount(miles){
//     const first10miles = 10;
//     const second10miles = 50;
//     const third10miles = 100;
//     if(miles <= 10){
//         const count = miles * first10miles
//         return count
//     }
//     else if( miles <= 20){
//         const first10 = 10 * first10miles
//         const restMiles = miles - 10
//         const second10 = restMiles * second10miles
//         const total = first10 + second10
//         return total
//     }
// }
// const animals = animalCount(17)
// console.log(animals);
/*
else if(person > 200){
    const second100Person = 200 * second100;
    const thirdRestperson = person - 100;
    const thirdCount =thirdRestperson * after200;
    const totalThirdCount = thirdCount + second100Person;
    return totalThirdCount;
}
*/

function picnicBudget(money){
    const CostFirstHundred = 5000;
    const CostSecondHundred = 4000;
    const CostThirdHundred = 3000;
    if(100 >= money){
        const firstCost = money * CostFirstHundred
        return firstCost
    }
    else if(200 >= money){
        firstHundred = 100 * CostFirstHundred
        const second = money - 100
        const secondHundred = second * CostSecondHundred
        const secondCost = firstHundred + secondHundred
        return secondCost
    }
    else{
        const firstHundred = 100 * CostFirstHundred
        const secondHundred = 100 * CostSecondHundred
        const thirdHundred = money - 200;
        const total = thirdHundred * CostThirdHundred
        const totalCost = firstHundred + secondHundred +total
        return totalCost
    }
}
const total = picnicBudget(202)
console.log(total);