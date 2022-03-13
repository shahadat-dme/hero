console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1

console.log(Math.sin(3.5));
var circumference = 2 * Math.PI * 2;
console.log(circumference);

console.log(parseInt('123', 10)) // 123
console.log(parseInt('010', 10)); // 10


Number.isNaN(NaN); // true
Number.isNaN('hello'); // false
Number.isNaN('1'); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]) // false
Number.isNaN([1,2]) // false


isNaN('hello'); // true
isNaN('1'); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]) // false
isNaN([1,2]) // true
