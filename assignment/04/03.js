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
// const total = picnicBudget(202)
// console.log(total);