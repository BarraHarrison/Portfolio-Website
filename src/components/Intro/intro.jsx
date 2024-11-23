import React from 'react'
import './intro.css'
import backgroundImage from '../../assets/background-image.jpg'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Barra</span> <br />Software Developer</span>
                <p className="introPara">
                    Skilled in fullstack development with a strong foundation in JavaScript,<br /> Python, and modern web technologies. <br />
                    Experienced in server-side rendering, data management,<br /> and client/server architecture.
                </p>
                <Link><button className='btn'><FontAwesomeIcon icon={faSuitcase} /> Hire me</button></Link>
            </div>
            <img src={backgroundImage} alt="" className="backgroundImage" />
        </section>
    )
}

export default intro
