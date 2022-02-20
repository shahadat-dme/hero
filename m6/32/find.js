const numbers = [11,7,22,44,2,64]
const bigNumbers = numbers.find(number => number > 20)
const smallNumbers = numbers.find(number => number < 20)
console.log(bigNumbers);
console.log(smallNumbers);


const products = [
    {name: "bottle", price: 50, color: "gray"},
    {name: "Laptop", price: 50000, color: "Silver"},
    {name: "Watch", price: 5000, color: "black"},
    {name: "Board", price: 500, color: "White"},
    {name: "glass", price: 500, color: "white"}
]
const productPrice = products.find(product => product.price> 5000)
const productColor = products.find(product => product.color == "white")
console.log(productPrice);
console.log(productColor);