import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  const handleAddUser =() =>{
    
  }
  return (
    <div className="App">
      <h1> Data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name'/>
        <input type="text" name='name' placeholder='Email'/>
        <input type='submit' value='Add User'/>
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>Name: {user.name} Email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
