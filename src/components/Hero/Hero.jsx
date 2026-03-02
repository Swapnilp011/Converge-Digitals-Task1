import React from 'react';
import './Hero.css';
import heroBg from '../../assets/herosection.jpg';

const Hero = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="container">
                <div className="hero-content">
                    <h1>Communication is the key for any Global Business</h1>
                    <div className="hero-buttons">
                        <button className="btn btn-white">ABOUT US</button>
                        <button className="btn btn-primary">OUR SERVICES</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
