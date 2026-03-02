import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="cta-banner">
            <div className="container cta-banner-content">
                <div className="cta-banner-text">
                    <h4>Would you like to speak to one of our financial advisors?</h4>
                    <p>Just submit your contact details and we'll be in touch shortly.</p>
                </div>
                <div>
                    <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Get a quote</button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
