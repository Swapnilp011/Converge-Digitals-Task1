import React from 'react';
import './Brands.css';
import amazonLogo from '../../assets/amazonlogo.png';
import googleLogo from '../../assets/googlelogo.png';
import salesforceLogo from '../../assets/salesforcelogo.png';

const Brands = () => {
    return (
        <section className="brands-section">
            <div className="brands-marquee">
                <div className="brands-track">
                    {/* Add again and again without huge spaces */}
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <img src={amazonLogo} alt="Amazon" className="brand-logo" />
                            <img src={googleLogo} alt="Google" className="brand-logo" />
                            <img src={salesforceLogo} alt="Salesforce" className="brand-logo" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
