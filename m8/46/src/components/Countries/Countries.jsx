import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'

function Countries() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <h1>Country: {countries.length}</h1>
            <div className='container'>
                {
                    countries.map(country =>
                        <Country country={country}
                        // name={country.name.common}
                        // official={country.name.official}
                        // area={country.area}
                        // population={country.population}
                        // capital={country.capital}
                        // border={country.borders}
                        // region={country.region}
                        // flag={country.flag}
                        />)
                }
            </div>
        </>
    )
}

export default Countries