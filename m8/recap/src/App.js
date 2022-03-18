import React, {useEffect, useState} from 'react'
import './App.css';
import Users from './components/user/Users';

function App() {
  return (
    <div className="App">
      <Users/>
      <LoadPosts/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
    </div>
  );
}

function LoadPosts(){

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body} key={post.id}/>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor: 'salmon',margin:'20px',border:'2px solid blue',borderRadius:'5px', height:'120px'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle ={
  backgroundColor: 'pink',
  margin: '20px',
  borderRadius: '8px',
  padding: '70px'
}
function District(props){

  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2
    setPower(newPower)
  }

  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Specialty: {props.special}</h2>
      <h3>Power: {power}</h3>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}
export default App;
