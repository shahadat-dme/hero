import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  
  return (
    <div className="App">
      <LoadCountries/>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
  },[])

  return (
    <div>
      <h1>Visiting world!</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
