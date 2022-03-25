import React from 'react'
import { addToDb } from '../../utilities/fakedb2'


const DokanShow = (props) => {
    const { name, price, id } = props.dokan
    const addToCart = (id) => {
        // console.log('Item Added', id);
        // localStorage.setItem(id, 1)
        addToDb(id)

    }
    // const addToCartWithParam = () => addToCart(id)
    return (
        <div className=''>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{id}</h3>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default DokanShow