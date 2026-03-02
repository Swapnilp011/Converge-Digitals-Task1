import React from 'react';
import './HeaderInfo.css';

const HeaderInfo = () => {
    return (
        <div className="header-info container">
            <div className="header-info-content">
                <div className="logo">
                    <span style={{ color: 'black' }}>❖</span> Consuloan
                </div>
                <div className="header-contacts">
                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div className="contact-text">
                            <h5>001-2345-6889</h5>
                            <p>info.consulting@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-text">
                            <h5>60 Berlin Street 124/V</h5>
                            <p>New York City, US</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">⏱</div>
                        <div className="contact-text">
                            <h5>8:00 AM - 6:00 PM</h5>
                            <p>Monday to Saturday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;
