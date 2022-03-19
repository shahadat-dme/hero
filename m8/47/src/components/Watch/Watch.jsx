import React, { useEffect, useState } from 'react'
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount)
    }

    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid red', margin: '10px' }}>
            <h2>This is my smart watch</h2>
            <h3>Steps {steps}</h3>
            <button onClick={increaseSteps}>Steps Count</button>
            <Display name="Shahadat" steps={steps} />
        </div>
    )
}

export default Watch