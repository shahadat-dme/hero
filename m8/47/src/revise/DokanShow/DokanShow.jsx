import React from 'react'

const DokanShow = (props) => {
    const { name, price, id } = props.dokan
    const addToCart = (id) => {
        console.log('Item Added', id);
    }
    // const addToCartWithParam = () => addToCart(id)
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{id}</h3>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default DokanShow