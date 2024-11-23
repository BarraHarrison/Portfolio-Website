import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faTasks } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className="skillDescription">
                Skilled and passionate software developer. Proficient in fullstack development with expertise in JavaScript, Python, and modern web technologies.
                I have hands-on experience with server-side rendering, client/server architecture, and data management.
                Dedicated to building dynamic, scalable applications and continuously learning the latest industry trends to deliver innovative solutions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    {/* Icon for Python/Robotics */}
                    <FontAwesomeIcon icon={faRobot} className="skillIcon" />
                    <div className="skillBarText">
                        <h2>Python/Robotics</h2>
                        <p>Experienced in Python programming and robotics applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    {/* Icon for Web Development */}
                    <FontAwesomeIcon icon={faCode} className="skillIcon" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Skilled in full-stack web development, including React and server-side rendering.</p>
                    </div>
                </div>
                <div className="skillBar">
                    {/* Icon for Project Management */}
                    <FontAwesomeIcon icon={faTasks} className="skillIcon" />
                    <div className="skillBarText">
                        <h2>Project Management</h2>
                        <p>Experienced in collaborative coding and managing development projects.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
