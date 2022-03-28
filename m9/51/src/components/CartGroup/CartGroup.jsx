import React from 'react'
import Cart from '../Cart/Cart'

const CartGroup = () => {
    const products = [
        { id: 1, name: 'lap', price: 454 },
        { id: 2, name: 'lap2', price: 474 },
        { id: 3, name: 'lap3', price: 444 },
        { id: 4, name: 'lap4', price: 434 },
        { id: 5, name: 'lap5', price: 424 },
    ]
    return (
        <>
            <h1>This Cart</h1>
            <div className="card-group">
                {
                    products.map(product => <Cart
                        key={product.id} product={product} />)
                }
            </div>
        </>

    )
}

export default CartGroup