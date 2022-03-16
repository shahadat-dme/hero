import React, { useState } from 'react'

function State07() {
    const [count, setCount] = useState(55)
    // console.log(count);

    // const increaseCount = () => {
    //     const newCount = count + 1;
    //     setCount(newCount)
    // }

    // const decreaseCount = () => {
    //     const newCount = count - 1;
    //     setCount(newCount)
    // }

    const increaseCount = () => { setCount(count + 1) }
    const decreaseCount = () => { setCount(count - 1) }
    return (
        <div>
            <div>Counter: {count}</div>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}

export default State07;