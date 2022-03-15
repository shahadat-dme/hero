import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                <a href='/blog'>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar