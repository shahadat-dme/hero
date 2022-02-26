const student = {
    id: 102,
    money: 70000,
    name: 'Kibriya',
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 60000,
    name: 'Hero Balam'
}

student.treatDey(1000)