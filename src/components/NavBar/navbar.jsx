import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <FontAwesomeIcon icon={faB} className="logo" />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-120} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuListItem'>Certifications</Link>
            </div>
            <button className="desktopMenuButton" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <FontAwesomeIcon icon={faEnvelope} className='contactIcon' />
                Contact Me
            </button>
            {/* Mobile menu toggle button */}
            <FontAwesomeIcon
                icon={faBars}
                className="mobileMenu"
                onClick={() => setShowMenu(!showMenu)}
            />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-120} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Certifications</Link>
            </div>
        </nav>
    );
};

export default NavBar;
