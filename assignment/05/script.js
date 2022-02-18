// Income & Expenses Section
document.getElementById("calculationButton").addEventListener("click", function(){
    let income = document.getElementById("incomeField").value
    const totalIncome = parseInt(income);
    let food = document.getElementById("foodField").value
    let rent = document.getElementById("rentField").value
    let clothes = document.getElementById("clothesField").value
    let expenditure = parseInt(food) + parseInt(rent) + parseInt(clothes);
    let totalExpense = document.getElementById("expense");
    totalExpense.innerText = expenditure;
    let balanceAfterExpense = document.getElementById("balance");
    balanceAfterExpense.innerText = balanceCalculation(totalIncome,expenditure);
})
// Saving Section
document.getElementById("savingButton").addEventListener("click", function(){
  let income = document.getElementById("incomeField").value;
  const totalIncome = parseInt(income);
  const savingAmt = document.getElementById("savingField").value;
  let savingMoney = (parseInt(savingAmt) / 100) * totalIncome;
  let saving = document.getElementById("totalSaving");
  saving.innerText = savingMoney;
  // Remaining Balance
  let food = document.getElementById("foodField").value;
  let rent = document.getElementById("rentField").value;
  let clothes = document.getElementById("clothesField").value;
  let expenditure = parseInt(food) + parseInt(rent) + parseInt(clothes);
  let totalExpenditure = savingMoney + expenditure;
  let totalBalance = balanceCalculation(totalIncome, totalExpenditure);
  document.getElementById("remainingBalance").innerText;
  remainingBalance.innerText = totalBalance;
  // Clear Input Field
  incomeField.value = "";
  foodField.value = "";
  rentField.value = "";
  clothesField.value = "";
  savingField.value = "";
})
//Generel Function
function balanceCalculation(a,b){
    let balance = a-b;
    return balance;
};