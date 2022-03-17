import './App.css';
// import React, { useEffect, useState } from 'react'
import Person from './components/Person';
import Header from './components/Header';
// import Country from './components/Country/Country';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <Header/>
      {/* <LoadCountries/> */}
      <Person/>
      {/* <Country/> */}
      <Countries/>
      <Footer/>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     // .then(data => console.log(data))
//     .then(data => setCountries(data))
//   },[])

//   return (
//     <div>
//       <h1>Visiting world!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {/* {
//         countries.map(country => <p>{country.name.common}</p>)
//       } */}
//             {
//         countries.map(country => <Country name={country.name.common} population={country.population}/>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Population: {props.population}</h3>
//     </div>
//   )
// }

export default App;
