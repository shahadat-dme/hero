import React, { useEffect, useState } from 'react'
import User from './User'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))
    },[])
  return (
    <div>
        <h2>User: {users.length}</h2>
        {
          users.map(user => <User key={user.id} 
            name={user.name} email={user.email}
            company={user.company.name}
          />)
        }
    </div>
  )
}

export default Users