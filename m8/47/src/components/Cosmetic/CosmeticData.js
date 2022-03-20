import React from 'react'

const CosmeticData = (props) => {
    const {name, price, id} = props.cosmetic
    // const {name, price, id} = props.data4
    return (
        <div>
            {/* <h2>Buy this: {props.cosmetic.name}</h2> */}
            {/* <p>Only for: ${props.cosmetic.price}</p> */}
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p>Id: {id}</p>
        </div>
    )
}

export default CosmeticData