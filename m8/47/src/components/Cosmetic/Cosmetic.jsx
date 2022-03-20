import React from 'react'
import CosmeticData from './CosmeticData'

const Cosmetic = () => {
    // const cosmetics = [
    //     { id: 1, name: 'Alita', price: 1600 },
    //     { id: 2, name: 'Alitaer', price: 1200 },
    //     { id: 3, name: 'Alitawq', price: 1500 },
    //     { id: 4, name: 'Alitaqy', price: 4500 },
    //     { id: 5, name: 'Alitayu', price: 145600 },
    // ]
    const cosmetics = [
        {
            "id": "62374d5088ae1749dc5538b9",
            "price": 25,
            "name": "Casey Lang"
        },
        {
            "id": "62374d50ecc3b2ac67256e97",
            "price": 22,
            "name": "Waller Garrett"
        },
        {
            "id": "62374d50662ae68f2a8c93e7",
            "price": 24,
            "name": "Marcie Rhodes"
        },
        {
            "id": "62374d503ae8f0998ad73c5a",
            "price": 25,
            "name": "Henson Camacho"
        },
        {
            "id": "62374d5056d06221da93b177",
            "price": 22,
            "name": "Hester Acevedo"
        }
    ]
    return (
        <div>
            <h1>Cosmetics Store</h1>
            {/* {
                cosmetics.map(cosmetic => console.log(cosmetic))
            } */}
            {
                cosmetics.map(cosmetic =>
                    <CosmeticData key={cosmetic.id}
                        cosmetic={cosmetic}
                    />)
            }
        </div>
    )
}

export default Cosmetic