const kibria = {
    id: 102,
    money: 70000,
    name: 'Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function (){
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function(expense, boksis, tax){
        this.money = this.money - expense - boksis, tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 222,
    money: 60000,
    name: 'Hero Balam'
}

const heroGalam = {
    id: 202,
    money: 5000,
    name: 'Hero Galam'
}

// kibria.treatDey()
// myTreatDey()

function add(a, b){
    console.log(this);
}