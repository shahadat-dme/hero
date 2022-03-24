import React, { useEffect, useState } from 'react'
import DokanShow from '../DokanShow/DokanShow';

const Dokan = () => {

    const [dokans, setDokans] = useState([]);
    useEffect(() => {
        fetch('data-revise.json')
            .then(res => res.json())
            .then(data => setDokans(data))
    }, [])

    return (
        <div>
            <h1>Welcome to my Dokan store</h1>
            {/* {
                cosmetics.map(cosmetic => console.log(cosmetic))
            } */}
            {
                dokans.map(dokan => <DokanShow key={dokan.id} dokan={dokan} />)
            }
        </div>
    )
}

export default Dokan;