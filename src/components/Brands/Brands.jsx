import React from 'react';
import './Brands.css';

const Brands = () => {
    return (
        <section className="brands-section container">
            <div className="brands-container">
                <div className="brand-placeholder" style={{ color: '#333' }}>prime</div>
                <div className="brand-placeholder" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ff3366' }}></div>
                    <span>oc</span>
                </div>
                <div className="brand-placeholder">duo</div>
                <div className="brand-placeholder">TechConsulting</div>
                <div className="brand-placeholder">Amaris</div>
            </div>
        </section>
    );
};

export default Brands;
