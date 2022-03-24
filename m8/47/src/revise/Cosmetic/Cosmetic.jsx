import React from 'react'
import { addToDb } from '../../utilities/fakedb'
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic

    const addToCart = (id) => {
        // console.log('Item Added', id);
        // localStorage.setItem(id, 1)
        const quantity = localStorage.getItem(id)
        if (quantity) {
            console.log('Already exists');
            const newQuantity = parseInt(quantity) + 1;
            localStorage.setItem(id, newQuantity)
        } else {
            console.log('new item')
            localStorage.setItem(id, 1)
        }


    }
    // const addToCartWithParam = () => addToCart(id)
    return (
        <div className='products'>
            {/* <h2>Buy this: {props.cosmetic.name}</h2> */}
            {/* <p>Only for: ${props.cosmetic.price}</p> */}
            {/* <h1>Key: {props.cosmetic.id}</h1> */}
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Key: {id}</p>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default Cosmetic;