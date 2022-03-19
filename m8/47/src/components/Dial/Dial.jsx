import React from 'react'

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid cyan', margin: '8px' }}>
            <h2>Dial</h2>
            <p>steps {props.steps}</p>
        </div>
    )
}

export default Dial