import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-title">
                    <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>We advise you, you call the right decision!</h2>
                    <p style={{ color: '#ddd' }}>We help entrepreneurs get their act together before they talk to investors.</p>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="icon" style={{ fontSize: '40px', color: 'var(--primary-purple)' }}>🏢</div>
                        <h3>90</h3>
                        <p>Companies consulted</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon" style={{ fontSize: '40px', color: 'var(--primary-purple)' }}>👥</div>
                        <h3>120</h3>
                        <p>Consultants</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon" style={{ fontSize: '40px', color: 'var(--primary-purple)' }}>🏆</div>
                        <h3>50</h3>
                        <p>Awards Winning</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon" style={{ fontSize: '40px', color: 'var(--primary-purple)' }}>❤️</div>
                        <h3>240</h3>
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
