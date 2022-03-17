import React from 'react'
import './Country.css'

function Country(props) {
    const { name, area, region, population, capital, borders, flags } = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <h2>Country Official: {name.official}</h2>
            <h2>Country Area: {area}</h2>
            <h3>Country Population: {population}</h3>
            <p>Capital: {capital}</p>
            <p>Border: {borders}</p>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />

            {/* <h1>Country Name: {props.country.name.common}</h1>
            <h2>Country Official: {props.country.name.official}</h2>
            <h2>Country Area: {props.country.area}</h2>
            <h3>Country Population: {props.country.population}</h3>
            <p>Capital: {props.country.capital}</p>
            <p>Border: {props.country.borders}</p>
            <p>Region: {props.country.region}</p>
            <p>Flag: {props.country.flags}</p> */}

        </div>
    )
}

export default Country