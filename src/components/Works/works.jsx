import React from 'react';
import './works.css';
import chessImg from '../../assets/chess.png';
import snakeGameImg from '../../assets/snake-game.png';
import colourPickerImg from '../../assets/colour-picker.png';
import wpmImg from '../../assets/wpm-image.png';
import shortestPathImg from '../../assets/shortest-path-finder.png';
import dataScraperImg from '../../assets/data-scraper.webp';

const Works = () => {
    return (
        <section id="works">
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="worksDescription">I take pride in paying attention to the smallest details.</span>
            <div className="portfolioExamples">
                {/* Portfolio project images and descriptions */}
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/Chess" target="_blank" rel="noopener noreferrer">
                        <img src={chessImg} alt="Chess Project" />
                    </a>
                    <p>A JavaScript project where players can play chess with a dynamic board and intuitive controls.</p>
                </div>
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/Snake-Game" target="_blank" rel="noopener noreferrer">
                        <img src={snakeGameImg} alt="Snake Game Project" />
                    </a>
                    <p>A classic Snake Game built with JavaScript, featuring smooth gameplay and increasing difficulty.</p>
                </div>
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/Colour-Picker" target="_blank" rel="noopener noreferrer">
                        <img src={colourPickerImg} alt="Colour Picker Project" />
                    </a>
                    <p>A JavaScript-based color picker tool that allows users to select and copy colors for design projects.</p>
                </div>
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/WPM-Typing-Test" target="_blank" rel="noopener noreferrer">
                        <img src={wpmImg} alt="WPM Typing Test Project" />
                    </a>
                    <p>A Python project to test and improve typing speed with real-time word-per-minute calculations.</p>
                </div>
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/Python-Shortest-Path-Finder" target="_blank" rel="noopener noreferrer">
                        <img src={shortestPathImg} alt="Shortest Path Finder Project" />
                    </a>
                    <p>A Python algorithm-based project that calculates the shortest path between nodes in a graph.</p>
                </div>
                <div className="portfolioItem">
                    <a href="https://github.com/BarraHarrison/Data-Scraper-Python-Project" target="_blank" rel="noopener noreferrer">
                        <img src={dataScraperImg} alt="Data Scraper Project" />
                    </a>
                    <p>A data scraping project in Python to extract and organize information from websites efficiently.</p>
                </div>
            </div>
            <button className="portfolioWorksButton">See More</button>
        </section>

    );
};

export default Works;
