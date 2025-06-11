import React from "react";
import './Header.css';
import cta from './assets/cta.png';

const Header = () => {
    return (
        <>
            <header className="image-header">
                <img src={cta} alt="StackedUp Find your Inspiration" className="header-background" />
                <div className="logo-container">
                    <h2>StackedUP</h2>
                </div>
            </header>
            <h2 className="section-title">A Section About Something</h2>
        </>
    );
};

export default Header;
