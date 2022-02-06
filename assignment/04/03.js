// function picnicBudget(money){
//     const CostFirstHundred = 5000;
//     const CostSecondHundred = 4000;
//     const CostThirdHundred = 3000;
//     if(100 >= money){
//         const firstCost = money * CostFirstHundred
//         return firstCost
//     }
//     else if(200 >= money){
//         firstHundred = 100 * CostFirstHundred
//         const second = money - 100
//         const secondHundred = second * CostSecondHundred
//         const secondCost = firstHundred + secondHundred
//         return secondCost
//     }
//     else{
//         const firstHundred = 100 * CostFirstHundred
//         const secondHundred = 100 * CostSecondHundred
//         const thirdHundred = money - 200;
//         const total = thirdHundred * CostThirdHundred
//         const totalCost = firstHundred + secondHundred +total
//         return totalCost
//     }
// }

function picnicBudget(number) {
    //per men Picnic cost 1 to 100 = 5000Tk, 101 to 200 = 4000Tk, 201 to 201++ = 3000Tk
    if (typeof number != "number") {
      return "error message";
    } else {
      if (number <= 100) {
        return number * 5000;
      } else if (number <= 200) {
        return (number - 100) * 4000 + 100 * 5000;
      } else {
        return (number - 200) * 3000 + 100 * 4000 + 100 * 5000;
      }
    }
  }
const total = picnicBudget(202)
console.log(total);