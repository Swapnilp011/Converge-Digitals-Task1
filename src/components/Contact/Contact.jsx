import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container contact-container">
                <div className="contact-text" style={{ width: '35%' }}>
                    <h2>Request a call back.</h2>
                    <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.6' }}>Would you like to speak to one of our financial advisors? Just submit your contact details and we'll be in touch shortly. You can also email us if you prefer that type of communication.</p>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
