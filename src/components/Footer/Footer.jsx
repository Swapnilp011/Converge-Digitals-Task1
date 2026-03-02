import React from 'react';
import './Footer.css';
import instalogo from '../../assets/instalogo.png';
import facebooklogo from '../../assets/facebooklogo.png';
import linkedinlogo from '../../assets/linkedinlogo.png';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col" style={{ flex: '1.5' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px' }}>
                            <span style={{ color: 'var(--primary-purple)' }}>❖</span> Consuloan
                        </h4>
                        <p>We are a leading financial consulting firm helping businesses optimize their operations and maximize growth potential globally.</p>
                    </div>
                    <div className="footer-col">
                        <h4>About us</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#team">Our team</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Financial Consulting</a></li>
                            <li><a href="#">Technology Consulting</a></li>
                            <li><a href="#">Human Resources</a></li>
                            <li><a href="#">Marketing Analytics</a></li>
                            <li><a href="#">Risk Management</a></li>
                        </ul>
                    </div>
                    <div className="footer-col" style={{ flex: '1.5' }}>
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter for latest updates on tax and financial regulations.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email address" />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Consuloan. All rights reserved. www.consuloan.com</p>
                    <div className="footer-socials">
                        <img src={facebooklogo} alt="Facebook" />
                        <img src={instalogo} alt="Instagram" />
                        <img src={linkedinlogo} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
