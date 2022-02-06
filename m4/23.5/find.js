const products = [
    {name: "iphone", price: 80000},
    {name: "samsung", price: 70000},
    {name: "Dell", price: 90000},
    {name: "hp", price: 50000},
    {name: "lenovo", price: 60000},
    {name: "smart", price: 40000},
]

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product)
        }
    }
    return result;
}

const matched = searchProducts(products,"iphone")
console.log(matched);