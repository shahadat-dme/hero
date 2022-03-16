import React, { useEffect, useState } from 'react'

function DynamicData() {

    const [users, setUsers] = useState([])
    // useEffect(()=> {},[])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>DynamicData</h2>
            <p>{users.length}</p>
            {
                users.map(user => <li>{user.name}</li>)
            }

            {
                users.map(user => <User name={user.name} email={user.email} />)
            }
        </div>
    )
}

function User(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Email: {props.email}</h4>
        </div>
    )
}
export default DynamicData;