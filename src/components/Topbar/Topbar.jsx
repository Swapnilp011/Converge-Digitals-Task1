import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="container topbar-content">
                <div className="topbar-left">
                    <span>Welcome to Financial Services Consultant</span>
                </div>
                <div className="topbar-right">
                    <span>English ▼</span>
                    <span>📱</span>
                    <span>🌐</span>
                    <div className="topbar-quote">GET A QUOTE</div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
