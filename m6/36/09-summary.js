const pen = {
    brand: 'econo',
    price: 5,
    writePoem: function(food){
        console.log(food);
    }
}
const keys = Object.keys(pen)
const values = Object.values(pen)

for(const key in pen){
    console.log(pen[key]);
}

const a = {a : 1};
const b = {a : 1};
const c = a;

if(a === b){

}

const bindPen = pen.writePoem.bind(a)
bindPen();

// bind 
// call 
// apply
// this