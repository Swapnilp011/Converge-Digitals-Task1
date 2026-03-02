import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Team</h2>
                    <p>We are here to facilitate your business and help you find the way.</p>
                </div>

                <div className="team-grid">
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Team 1" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>Jackson Nash</h5>
                            <p>Tax Advisor</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div style={{ position: 'relative', background: 'var(--primary-purple)' }}>
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Team 2" className="team-img" style={{ objectFit: 'cover', opacity: 0.8 }} />
                            <div style={{ position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px 0' }}>
                                <span style={{ color: 'white' }}>📱</span>
                                <span style={{ color: 'white' }}>✉️</span>
                                <span style={{ color: 'white' }}>🌐</span>
                            </div>
                        </div>
                        <div className="team-info" style={{ background: 'var(--primary-purple)', color: 'white' }}>
                            <h5 style={{ color: 'white' }}>Opalena Nash</h5>
                            <p style={{ color: '#ddd' }}>Tax Advisor</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Team 3" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>David Nash</h5>
                            <p>Tax Advisor</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Team 4" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>Roger West</h5>
                            <p>Project Analyst</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
