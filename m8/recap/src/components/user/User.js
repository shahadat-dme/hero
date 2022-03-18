import React from 'react'

function User(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.key}</h3>
        <h3>{props.email}</h3>
        <h5>{props.company}</h5>
    </div>
  )
}

export default User