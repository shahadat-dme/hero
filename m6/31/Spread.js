const num = [2,4,5,7]
console.log(num);
console.log(...num);

const max = Math.max(...num)
console.log(max);

// num.push(24);

const num2 = [...num]
const num3 = [88,...num,222]
num.push(22);
console.log(num2);
console.log(num);
console.log(num3);