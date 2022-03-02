const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount
            return balance
    },
    withdraw: amount => {
        balance -= amount
        return balance
    }
}
}

const MofiBank = bank('Mofij');
console.log(MofiBank.deposit(100));
console.log(MofiBank.deposit(200));
console.log(MofiBank.deposit(400));
console.log(MofiBank.deposit(500));
// console.log(MofiBank.balance);
console.log(MofiBank.deposit(200));

console.log(MofiBank.withdraw(200));
console.log(MofiBank.withdraw(400));