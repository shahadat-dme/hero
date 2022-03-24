import React from 'react'

const DokanShow = (props) => {
    const { name, price, id } = props.dokan
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{id}</h3>
        </div>
    )
}

export default DokanShow