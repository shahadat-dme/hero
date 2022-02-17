function getExpenceInput(costMoney){
    const inputField = document.getElementById(costMoney);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}


document.getElementById('cost-calculate').addEventListener('click',function(){
    const foodAmount = getExpenceInput('food-input')
    const rentAmount = getExpenceInput('rent-input')
    const clothesAmount = getExpenceInput('clothes-input')
    const totalCost = foodAmount + rentAmount + clothesAmount;
    return totalCost
})

// document.getElementById('').addEventListener('click',function(){
//     const rentAmount = getExpenceInput('')
// })

// document.getElementById('').addEventListener('click',function(){
//     const clothesAmount = getExpenceInput('')
// })