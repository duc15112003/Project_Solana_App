// src/components/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>Feedback</span>Rewards</h1>
                    <p>
                        Chúng tôi cung cấp nền tảng để nhận phản hồi và nhận phần thưởng.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 0966-980-532</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; phamminhduc15112003dilinh@gmail.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Liên Kết Nhanh</h2>
                    <br />
                    <ul>
                        <a href="#"><li>Dịch Vụ</li></a>
                        <a href="#"><li>Đội Ngũ</li></a>
                        <a href="#"><li>Liên Hệ</li></a>
                        <a href="#"><li>Về Chúng Tôi</li></a>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2>Liên Hệ Chúng Tôi</h2>
                    <br />
                    <form action="#" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Email của bạn..." />
                        <textarea rows="4" name="message" className="text-input contact-input" placeholder="Tin nhắn của bạn..."></textarea>
                        <button type="submit" className="btn btn-big">
                            <i className="fas fa-envelope"></i>
                            Gửi
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                © Not Copy; Được thiết kế bởi Pham Minh Duc
            </div>
        </footer>
    );
};

export default Footer;
