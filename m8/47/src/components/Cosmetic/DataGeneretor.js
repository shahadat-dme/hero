import React from 'react'
import CosmeticData from './CosmeticData'

const DataGeneretor = () => {
    const datas = [
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
      <h1>Data</h1>
    {
        datas.map(data4 => 
            <CosmeticData key={data4.id}
            data4={data4}
            />
            )
    }
    </div>
  )
}

export default DataGeneretor