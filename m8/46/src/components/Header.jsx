import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <div>
            <h2>Welcome to React</h2>
            <nav className='menu'>
                <a href='/home'>Home</a>
                <a href='/about'>About</a>
                <a href='/blog'>Blog</a>
            </nav>
        </div>
    )
}
