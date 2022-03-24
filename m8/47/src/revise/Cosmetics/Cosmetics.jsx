import React from 'react'
import Cosmetic from '../Cosmetic/Cosmetic'
import './Cosmetics.css'

const Cosmetics = () => {

    const cosmetics = [
        { id: 1, name: 'Alita', price: 1600 },
        { id: 2, name: 'Alitaer', price: 1200 },
        { id: 3, name: 'Alitawq', price: 1500 },
        { id: 4, name: 'Alitaqy', price: 4500 },
        { id: 5, name: 'Alitayu', price: 145600 },
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {/* {
                cosmetics.map(cosmetic => console.log(cosmetic))
            } */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />)
            }
        </div>
    )
}

export default Cosmetics