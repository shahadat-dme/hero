const personObject = {
    firstName: 'Shahadat',
    lastName: "Hossain",
    address: {country: "Bangladesh", capital: 'Dhaka'}
};
const cart = {abc: 1, def: 2, ghi: 1}

const personArray= ["Shahadat","Hossain"]

// Dot Notation 
const firstName = personObject.firstName;
// console.log(firstName);

//Square Bracket Notation
const lastName = personObject["lastName"]
// console.log(lastName);

const giveQuantity = (id) => {
    console.log(cart[id]);
}
giveQuantity('def')