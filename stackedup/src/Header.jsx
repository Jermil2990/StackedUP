import React from "react";
import './Header.css';
import headerImage from './assets/cta.png';

const Header = () => {
    return (
        <>
            <header className="image-header">
                <img src={headerImage} alt="StackedUp Image" className="header-background" />
                <div className="logo-container">
                    <h2>StackedUP</h2>
                </div>
            </header>
        </>
    );
};

export default Header;
