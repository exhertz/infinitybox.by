// src/components/Footer.tsx
import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <p>Скоро будет отвечаю</p>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    position: 'relative',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: '10px 0',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    fontSize: '14px',
    color: '#6c757d',
    marginTop: 'auto',
};

export default Footer;
