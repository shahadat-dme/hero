import React from 'react'
import './About.css'
import img from '../../assets/shahadat.JPG'

const About = () => {
    return (
        <div className='profile'>
            <h1>Md Shahadat Hossain</h1>
            <img src={img} alt='shahadat' />
            <p>As a Web developer, I want to be able to design Website that can effectively display material, provide interactivity, and be artistically pleasing to the user.</p>
        </div>
    )
}

export default About