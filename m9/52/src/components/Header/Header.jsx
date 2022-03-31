import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <h1>Welcome React Router 6</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                {/* <Link to='/'>Home</Link> */}
                <CustomLink to='friends'>Friends</CustomLink>
                {/* <Link to='friends'>Friends</Link> */}
                <CustomLink to='/about'>About</CustomLink>
                {/* <Link to='/about'>About</Link> */}
                <Link to='/posts'>Posts</Link>
                <br />
                <Link to='countries'>Countries</Link>
            </nav>
        </div>
    )
}

export default Header