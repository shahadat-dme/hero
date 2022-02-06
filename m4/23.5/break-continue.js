const products = [
    {name: "iphone", price: 80000},
    {name: "samsung", price: 70000},
    {name: "Dell", price: 90000},
    {name: "hp", price: 45000},
    {name: "lenovo", price: 60000},
    {name: "smart", price: 40000},
]

// for (const product of products){
//     if(product.price < 50000){
//         break
//     }
//     console.log(product);
// }

for (const product of products){
    if(product.price < 50000){
        continue
    }
    console.log(product);
}