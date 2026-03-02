import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-overlay"></div>
            <div className="container contact-container">
                <div className="contact-text">
                    <h2>Request a call back.</h2>
                    <p>Would you like to speak to one of our financial advisors? Just submit your contact details and we'll be in touch shortly. You can also email us if you prefer that type of communication.</p>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <select required defaultValue="" className="contact-input">
                        <option value="" disabled hidden>How can we help? *</option>
                        <option value="wealth">Wealth Management</option>
                        <option value="tax">Tax Advisory</option>
                        <option value="investment">Investment Planning</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="text" placeholder="Your Name *" required className="contact-input" />
                    <input type="text" placeholder="Phone Number *" required className="contact-input" />
                    <button type="submit">SUBMIT &#8250;</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
