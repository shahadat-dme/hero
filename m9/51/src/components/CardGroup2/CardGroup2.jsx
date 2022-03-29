import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Card2 from '../Card2/Card2'

const CardGroup2 = () => {

    const products = [
        { id: 1, name: 'lap', price: 454 },
        { id: 2, name: 'lap2', price: 474 },
        { id: 3, name: 'lap3', price: 444 },
        { id: 4, name: 'lap4', price: 434 },
        { id: 5, name: 'lap5', price: 424 },
    ]

    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2
                        key={product.id} product={product} />)
                }
            </CardGroup>
        </div>
    )
}

export default CardGroup2