const bottle = { color: 'green', hold: 'water', price: 75, isClean: true}

const keys = Object.keys(bottle)
console.log(keys);
const values = Object.values(bottle)
console.log(values);
const pairs = Object.entries(bottle)
console.log(pairs);
delete bottle.isClean;
console.log(bottle);

// Object.seal(bottle)
// Object.freeze
bottle.price = 100;
bottle.hight = 17;
delete bottle.color;
console.log(bottle);