function getInputValue(inputId){
    // debugger
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(TotalFieldId,Amount){
    const TotalElement = document.getElementById(TotalFieldId);
    const TotalText = TotalElement.innerText;
    const previouseTotal = parseFloat(TotalText);
    TotalElement.innerText = previouseTotal + Amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText)
    return previouseBalanceTotal;
}
function updateBalance(Amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previouseBalanceTotal = parseFloat(balanceTotalText)
    const previouseBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previouseBalanceTotal + Amount;
    }else{
        balanceTotal.innerText = previouseBalanceTotal - Amount;
    }
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdraw-total',withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('Your Balance Not sufficient');
    }
})

