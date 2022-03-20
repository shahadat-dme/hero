import React from 'react'
import { add } from '../utilities/calculate';
// import add from '../utilities/calculate';

const Cosmetics = () => {
    const first = 57;
    const second = 64;
    const total = add(first, second);
    return (
        <div>
            <h1>Shahadat</h1>
            <p>Total: {total}</p>
        </div>
    )
}

export default Cosmetics