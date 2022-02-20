const friends = ['dipok', 'Jahid', 'Anayet','Rashed']
const friendLength = friends.map(friend => friend.length)
console.log(friendLength);


const products = [
    {name: "bottle", price: 50, color: "gray"},
    {name: "Laptop", price: 50000, color: "Silver"},
    {name: "Watch", price: 5000, color: "black"},
    {name: "Board", price: 500, color: "White"},
    {name: "glass", price: 500, color: "white"}
]
const productNames = products.map(product => product.name)
const productPrice = products.map(product => product.price)
console.log(productNames);
console.log(productPrice);

// products.map(product => console.log(product));  // map return array
// products.forEach(product => console.log(product)); //forEach nothing return