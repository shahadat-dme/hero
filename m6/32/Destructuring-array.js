// Object
const myObject = {a : 2, b: 3, c: 7, d: 60, e: 70}
const {d,b} = myObject;
console.log(b,d);

//Array 
const [p,q,x,y] =[7,8,9,4,5,6,7,22,88]
console.log(p,q,x,y);

const company = {
    name: "Robi",
    ceo: {id: 101, name: 'Ajmol', food: 'Birani'},
    stack: {work: 'web' , employee: 222, framework: 'react', 
            tech: {first: 'html', second: 'css', third: 'js'}} 
};

//nested optional chaining
console.log(company?.stack?.backend?.tech);