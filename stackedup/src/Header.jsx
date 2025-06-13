import React from "react";
import './Header.css';
import headerImage from './assets/cta.png';

const Header = () => {
    return (
        <>
            <header className="header-class">
                <img src={headerImage} className="image-header"/>
                <div className="logo">
                    <h2>StackedUP</h2>
                </div>
            </header>
        </>
    );
};

export default Header;
