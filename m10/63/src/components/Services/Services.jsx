import React from 'react';
import { Card, CardGroup, Button } from "react-bootstrap";
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpeg'
import "./Services.css"

const Services = () => {
    return (
        <div className='m-5'>
            <h2 className='text'>Services</h2>
            <CardGroup>
                <Card className='p-2'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Develop advertisements</Card.Title>
                        <Card.Text>
                            Evening is the period of a day from the end of the afternoon to the beginning of night. The exact times when evening begins and ends depend on location, time of year
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">See More</Button>
                    </Card.Footer>
                </Card>
                <Card className='p-2'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Social strategies</Card.Title>
                        <Card.Text>
                            Include Social Commerce into Your Social Media Strategy. Learn everything you can about your audience.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">See More</Button>
                    </Card.Footer>
                </Card>
                <Card className='p-2'>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title>Fundraise campaigning</Card.Title>
                        <Card.Text>
                            A fundraising campaign is fundraising that happens over an extended period of time and highlights a specific, predetermined goal.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">See More</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Services;