const user = {id: 101, name: "Shahadat", job: 'Student'}
const stringified = JSON.stringify(user)

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Dipok Shop',
    address: 'Foridpur',
    profit: 15400,
    products: ['laptop','onion','pepsi'],
    isExpensive: false
}

// sting to JSON
const shopStringified = JSON.stringify(shop);

// console.log(shop);
console.log(shopStringified);

//JSON to string
const converted = JSON.parse(shopStringified)
console.log(converted);