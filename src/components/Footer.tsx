import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Иконки для соцсетей
import { AiFillPhone } from 'react-icons/ai'; // Иконка для телефона
import '../styles/footer.css'; // Подключаем файл с внешними стилями

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="company-info">
                    <h5 className="footer-heading">InfinityBox.by</h5>
                    <p className="footer-text">Компания по продаже и обслуживанию коробок для всего!</p>
                    <p className="footer-text">УНП: 1234567890</p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="contact-info">
                    <h5 className="footer-heading">Контактная информация</h5>
                    <p className="footer-text"><AiFillPhone size={20} /> +375 (29) 123-45-67</p>
                    <p className="footer-text">support@infinitybox.by</p>
                </div>
            </div>
            <p className="footer-bottom">© {new Date().getFullYear()} InfinityBox.by. Все права защищены.</p>
        </footer>
    );
};

export default Footer;
