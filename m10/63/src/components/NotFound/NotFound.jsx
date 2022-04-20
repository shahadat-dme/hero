import React from 'react';
import "./NotFound.css"
import Img from '../../assets/404.jpeg'

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <img className='image-not-found' src={Img} alt="" />
        </div>
    );
};

export default NotFound;