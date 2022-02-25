// using object literal
const student = {name: "Shahadat", gob: 'bekar'}

// construtor
const person = new Object();

const human = Object.create(null)
// console.log(human);

class People {
    constructor (name, age){
        this.name = name;
        this.age = age;
    } 
}
const ObjPeople = new People('Manus', 12)
// console.log(ObjPeople);

function Manus (name){
    this.name = name
}
const man = new Manus('Kader');
console.log(man);