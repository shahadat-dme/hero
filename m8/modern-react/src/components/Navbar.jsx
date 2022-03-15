import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>

                <a href='/blog' style={{
                    color: "cyan",
                    backgroundColor: "blue",
                    borderRadius: "5px"
                }}>New Blog</a>

            </div>
        </nav>
    )
}

export default Navbar