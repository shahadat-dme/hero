const products = [
    {name : 'laptop', price: 50000, q: 2},
    {name : 'shirt', price: 2000},
    {name : 'watch', price: 3000},
    {name : 'phone', price: 70000},
    {name : 'pc', price: 5000},
    {name : 'shoe', price: 1000},
]
let totalPrice = 0;
for(let product of products){
    totalPrice = totalPrice + product.price 
}
console.log(totalPrice);