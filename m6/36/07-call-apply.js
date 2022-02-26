const kibria = {
    id: 102,
    money: 70000,
    name: 'Kibria',
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

// kibria.treatDey.call(heroBalam,1504)
// kibria.treatDey.call(heroBalam,1804,95,78)

kibria.treatDey.apply(heroBalam,[1804,95,78])