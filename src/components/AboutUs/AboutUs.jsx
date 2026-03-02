import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about" className="section-padding container">
            <div className="section-title">
                <h2>About Us</h2>
                <p>We help you in creating a financial strategy that represents your personality. Getting to know you is financial advisor's primary goal. - An approach centered around your life's priorities, it's time for a financial strategy that puts your needs and priorities front and center.</p>
            </div>

            <div className="services-grid">
                <div className="service-card">
                    <div className="icon">📊</div>
                    <h4>Financial Projections</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
                <div className="service-card highlight">
                    <div className="icon">🎯</div>
                    <h4>Strategy & Consulting</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
                <div className="service-card">
                    <div className="icon">💻</div>
                    <h4>Online Consulting</h4>
                    <p>End ut perspiciatis unde omnis iste natus error sit voluptatem accusan dolorem laudantium.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
