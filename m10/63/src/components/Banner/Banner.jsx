import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/img4.jpeg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block" style={{ width: '100vw', height: '90vh' }}
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: "black", fontSize: '60px' }}>Fundraise for campaigning</h2>
                    <p>A fundraising campaign is fundraising that happens over an extended period of time and highlights a specific, predetermined goal.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    style={{ width: '100vw', height: '90vh' }}
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: "black", fontSize: '60px' }}>Develop advertisements</h2>
                    <p>Evening is the period of a day from the end of the afternoon to the beginning of night. The exact times when evening begins and ends depend on location, time of year</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block" style={{ width: '100vw', height: '90vh' }}
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: "black", fontSize: '60px' }}>Social strategies</h2>
                    <p>Include Social Commerce into Your Social Media Strategy. Learn everything you can about your audience.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;