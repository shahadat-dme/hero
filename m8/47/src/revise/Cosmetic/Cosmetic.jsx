import React from 'react'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    // const { name, price, id } = props.dokan
    return (
        <div>
            {/* <h2>Buy this: {props.cosmetic.name}</h2> */}
            {/* <p>Only for: ${props.cosmetic.price}</p> */}
            {/* <h1>Key: {props.cosmetic.id}</h1> */}
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Key: {id}</p>
        </div>
    )
}

export default Cosmetic;