import React, { useEffect, useState } from 'react'
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Friends {friends.length}</h1>
            <small>Taka dar de</small>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    )
}

export default Friends