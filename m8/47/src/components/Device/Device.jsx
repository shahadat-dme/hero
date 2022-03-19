import React from 'react'
import DeviceDetail from '../DeviceDetail/DeviceDetail'

function Device(props) {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price} />
        </div>
    )
}

export default Device