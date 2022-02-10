document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit');
    const depositInput = document.getElementById('deposit-input')
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)
    // console.log(newDepositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
    })