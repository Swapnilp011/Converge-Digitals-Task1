import React from 'react';
import './AboutUs.css';
import aboutus1 from '../../assets/aboutus1.png';
import aboutus2 from '../../assets/aboutus2.jpg';
import aboutus3 from '../../assets/aboutus3.webp';

import iconFinancial from '../../assets/Financial.png';
import iconStrategy from '../../assets/Strategy.png';
import iconOnline from '../../assets/Online.png';

const AboutUs = () => {
    return (
        <section id="about" className="section-padding container">
            <div className="section-title">
                <h2>About Us</h2>
                <p>We help you in creating a financial strategy that represents your personality. Getting to know you is financial advisor's primary goal. - An approach centered around your life's priorities, it's time for a financial strategy that puts your needs and priorities front and center.</p>
            </div>

            <div className="services-grid">
                <div className="service-card" style={{ '--hover-bg': `url(${aboutus1})` }}>
                    <div className="icon"><img src={iconFinancial} alt="Financial Projections" /></div>
                    <h4>Financial Projections</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
                <div className="service-card" style={{ '--hover-bg': `url(${aboutus2})` }}>
                    <div className="icon"><img src={iconStrategy} alt="Strategy & Consulting" /></div>
                    <h4>Strategy & Consulting</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
                <div className="service-card" style={{ '--hover-bg': `url(${aboutus3})` }}>
                    <div className="icon"><img src={iconOnline} alt="Online Consulting" /></div>
                    <h4>Online Consulting</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
