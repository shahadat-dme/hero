import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    )
}

export default Header