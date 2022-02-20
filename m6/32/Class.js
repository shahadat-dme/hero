class Support {
    name;
    designation = 'Support Web Dev';
    addres = 'BD'
    constructor(name, addres){
        this.name = name;
        this.addres = addres;
    }
    startSession(){
        console.log(this.name,  "start a support session");
    }
}

const amir = new Support('Amir Khan', 'Dhaka');
const salman = new Support("Salman Khan", 'Dubai');
// amir.startSession();
// salman.startSession();
console.log(amir);
console.log(salman);

amir.startSession();
salman.startSession();