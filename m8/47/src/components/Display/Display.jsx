import React from 'react'
import Dial from '../Dial/Dial'

const Display = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '8px' }}>
            <h2>Name : {props.name}</h2>
            <p>today: {props.steps}</p>
            <Dial steps={props.steps} />
        </div>
    )
}

export default Display