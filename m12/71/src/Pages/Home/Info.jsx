import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-16'>
            <InfoCard cardTitle="Opening Hours" cardBody='Click the button to listen on Doctors app1.' bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardBody="Click the button to listen on Doctors app2." bgClass="bg-gray-700" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardBody='Click the button to listen on Doctors app3.' bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;