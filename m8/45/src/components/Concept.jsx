import React from 'react'
import './concept.css';

function Concept() {

    const products = [
        { name: 'laptop', price: '654' },
        { name: 'phone', price: '854' },
        { name: 'taka', price: '454' },
        { name: 'poysa', price: '354' }
    ]
    return (
        <div>
            {
                products.map(product => <Product name={product.name} price={product.price}></Product>)
            }



            <Product name="laptop" price="7550" />
            <Product name="Phone" price="400" />
            <Product name="PC" price="750" />
            <Product name="Battol" price="784" />
        </div>
    )
}

function Product(props) {
    return (
        <div className='product'>
            <h2>Name: {props.name}</h2>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Concept;