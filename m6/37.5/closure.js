const bank = owner => {
    balance = 0;
    return amount => {
        balance += amount
        return balance
    }
}

const MofiBank = bank('Mofij');
console.log(MofiBank(100));
console.log(MofiBank(200));
console.log(MofiBank(400));
console.log(MofiBank(500));