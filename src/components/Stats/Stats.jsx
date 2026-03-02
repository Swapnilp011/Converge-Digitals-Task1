import React from 'react';
import './Stats.css';
import companiesImg from '../../assets/Companies.png';
import consultantsImg from '../../assets/Consultants.png';
import awardsImg from '../../assets/Awards.png';
import satisfiedImg from '../../assets/Satisfied.png';

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
                        <div className="icon">
                            <img src={companiesImg} alt="Companies" />
                        </div>
                        <h3>90</h3>
                        <p>Companies consulted</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon">
                            <img src={consultantsImg} alt="Consultants" />
                        </div>
                        <h3>120</h3>
                        <p>Consultants</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon">
                            <img src={awardsImg} alt="Awards" />
                        </div>
                        <h3>50</h3>
                        <p>Awards Winning</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon">
                            <img src={satisfiedImg} alt="Satisfied" />
                        </div>
                        <h3>240</h3>
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
