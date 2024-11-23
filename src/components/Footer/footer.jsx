import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            &copy; {new Date().getFullYear()} Barra Harrison. All rights reserved.
        </footer>
    );
};

export default Footer;

