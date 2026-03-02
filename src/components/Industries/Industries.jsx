import React from 'react';
import './Industries.css';

const Industries = () => {
    return (
        <section id="services" className="section-padding container">
            <div className="section-title">
                <h2>Our Industries</h2>
                <p>We are here to facilitate your business and help you find the way.</p>
            </div>

            <div className="industries-grid">
                <div className="industry-item">
                    <div className="industry-icon">💰</div>
                    <div className="industry-text">
                        <h4>Corporate Finance</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="industry-item">
                    <div className="industry-icon">📈</div>
                    <div className="industry-text">
                        <h4>Economic Consulting</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="industry-item">
                    <div className="industry-icon">⚖️</div>
                    <div className="industry-text">
                        <h4>Forensic & Litigation</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="industry-item">
                    <div className="industry-icon">🗣️</div>
                    <div className="industry-text">
                        <h4>Strategic Communications</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="industry-item">
                    <div className="industry-icon">💻</div>
                    <div className="industry-text">
                        <h4>Technology Consulting</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="industry-item">
                    <div className="industry-icon">🏥</div>
                    <div className="industry-text">
                        <h4>Healthcare Consulting</h4>
                        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
