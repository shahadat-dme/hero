import React, { useState } from 'react'

const State8 = () => {
    // let name = 'Murad';
    const [name, setName] = useState('Murad')
    const [age, setAge] = useState(28)

    const handleClick = () => {
        setName('Shahadat');
        setAge(24)
    }
    return (
        <div className='state'>
            <p>{name}</p>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me8</button>
        </div>
    )
}

export default State8;
