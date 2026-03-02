import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-left">
                <h1>Communication is the key for any Global Business</h1>
                <div className="hero-buttons">
                    <button className="btn btn-outline">ABOUT US</button>
                    <button className="btn btn-primary">OUR SERVICES</button>
                </div>
            </div>
            <div className="hero-right">
                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwc3RyZXRjaGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Hero Man"
                    style={{ width: '100%', maxWidth: '500px', objectFit: 'cover', borderTopLeftRadius: '50% 20%', borderTopRightRadius: '50% 20%' }}
                />
            </div>
        </section>
    );
};

export default Hero;
