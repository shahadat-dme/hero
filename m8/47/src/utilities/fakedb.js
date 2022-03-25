// Local storage to store data
const addToDb = id => {
    let shoppingCart ;
    
    // get shopping cart 
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        // console.log(storedCart);
        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart = {};
    }

    // const quantity = localStorage.getItem(id)
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
export {addToDb}