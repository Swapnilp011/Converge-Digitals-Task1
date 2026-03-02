import React from 'react';
import './Team.css';
import instalogo from '../../assets/instalogo.png';
import facebooklogo from '../../assets/facebooklogo.png';
import linkedinlogo from '../../assets/linkedinlogo.png';

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
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Jackson Nash" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>Jackson Nash</h5>
                            <p>Tax Advisor</p>
                            <div className="social-icons">
                                <img src={facebooklogo} alt="Facebook" />
                                <img src={instalogo} alt="Instagram" />
                                <img src={linkedinlogo} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Opalena Nash" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>Opalena Nash</h5>
                            <p>Tax Advisor</p>
                            <div className="social-icons">
                                <img src={facebooklogo} alt="Facebook" />
                                <img src={instalogo} alt="Instagram" />
                                <img src={linkedinlogo} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="David Nash" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>David Nash</h5>
                            <p>Tax Advisor</p>
                            <div className="social-icons">
                                <img src={facebooklogo} alt="Facebook" />
                                <img src={instalogo} alt="Instagram" />
                                <img src={linkedinlogo} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Roger West" className="team-img" style={{ objectFit: 'cover' }} />
                        <div className="team-info">
                            <h5>Roger West</h5>
                            <p>Project Analyst</p>
                            <div className="social-icons">
                                <img src={facebooklogo} alt="Facebook" />
                                <img src={instalogo} alt="Instagram" />
                                <img src={linkedinlogo} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
