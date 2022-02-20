const fish = {id: 1017, name: "King", price: 1200, 
phone: '01485623745', address: 'chadpur', dress: 'silver'}

const {id,name,price,phone,address,dress} = fish;
console.log(name, price);

const company = {
    name: "Robi",
    ceo: {id: 101, name: 'Ajmol', food: 'Birani'},
    stack: {work: 'web' , employee: 222, framework: 'react', 
            tech: {first: 'html', second: 'css', third: 'js'}} 
};

const {work, framework} = company.stack;
const {food} = company.ceo;
const {second,third} = company.stack.tech;
console.log(work, framework, food, third);