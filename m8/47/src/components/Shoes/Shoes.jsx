import React from 'react'
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>Shoes
            <h1>Result {result}</h1>
            <h2>Sum {sum}</h2>
        </div>
    )
}

export default Shoes