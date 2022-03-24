import React from 'react'
import { add, multiply } from '../../utilities/calculate';



const ModuleImport = () => {

    const first = 55;
    const second = 77;
    const total = add(first, second);
    const mul = multiply(first, second)

    return (
        <div>
            <h1>Hello, {total}</h1>
            <h1>Multiply {mul}</h1>
        </div>
    )
}

export default ModuleImport;