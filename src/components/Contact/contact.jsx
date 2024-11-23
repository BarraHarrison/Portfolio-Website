import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import wCodingImg from '../../assets/w-coding.webp';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7wh7rbk', 'template_vl0smmu', form.current, {
                publicKey: 'UNPIBbX5dSDXrskKp7DtR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert("Email Sent!");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contactPage">
            <div id="certificates">
                <h1 className="certificatePageTitle">My Certificates</h1>
                <p className="certificateDescription">
                    I have had the opportunity to train under a number of companies. <br />
                    Here I have honed my programming skills and learned about how to become a software developer.
                </p>
                <div className="certificateImages">
                    {/* W-Coding Image */}
                    <div className="certificateItem">
                        <img src={wCodingImg} alt="W-Coding Certificate" />
                        <p>
                            I successfully completed W-Coding's fullstack intensive bootcamp, where I gained expertise in both
                            frontend and backend development. This program equipped me with the skills and confidence to excel
                            in creating robust and dynamic web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDescription">Please fill out the form to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Name' name="your_name" />
                    <input type="text" className="email" placeholder='Email' name='your_email' />
                    <textarea className='message' name="message" rows="5" placeholder='Your message...'></textarea>
                    <button className="submitButton" type='submit' value='Send'>Submit</button>
                    <div className="links">
                        {/* GitHub Icon */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="linkIcon" />
                        </a>
                        {/* LinkedIn Icon */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="linkIcon" />
                        </a>
                        {/* Instagram Icon */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="linkIcon" />
                        </a>
                        {/* Twitter Icon */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="linkIcon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
