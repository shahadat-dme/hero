function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;

    const TotalSingaraPrice = singaraQuantity * singaraPrice;
    const TotalSomuchaPrice = somuchaQuantity * somuchaPrice;
    const TotalJilapiPrice = jilapiQuantity * jilapiPrice;

    const totalCost = TotalSingaraPrice + TotalSomuchaPrice + TotalJilapiPrice
    return totalCost
}

const total = pandaCost(0,1,1)
console.log(total);