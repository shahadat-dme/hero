import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-4xl'>I like tailwind</h1>
            <h3>Rapidly build modern websites without
                ever leaving your HTML.</h3>
        </div>
    )
}

export default Header