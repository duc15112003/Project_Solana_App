import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="contact-info">
                    <span>Email: phamminhduc15112003dilinh@gmail.com</span>
                    <span>Phone: +84 0966 980 532</span>
                </div>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="header-main">
                <div className="logo">
                    <img src='https://th.bing.com/th/id/OIG1.wEiQ5THKygtqn1KBn0W5?w=1024&h=1024&rs=1&pid=ImgDetMain' alt="Brand Logo"/>
                    <h1>FeedbackRewards</h1>
                </div>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="#">Trang</a></li>
                        <li><a href="#">Về chúng tôi</a></li>
                        <li><a href="#">Khảo sát</a></li>
                    </ul>
                </nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
