import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="footer">
            <div className="social-icon">
                <Link to="#" className="btn"><BsLinkedin></BsLinkedin></Link>
                <Link to="#" className="btn"><BsFacebook></BsFacebook></Link>
                <Link to="#" className="btn"><BsTwitter></BsTwitter></Link>
                <Link to="#" className="btn"><BsInstagram></BsInstagram></Link>
            </div>
            <h1 className="copyright">
                @copyright | Shahadat | 2022
            </h1>
        </section>
    );
};

export default Footer;