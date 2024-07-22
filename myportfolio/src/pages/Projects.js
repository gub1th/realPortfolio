import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard';

function Projects () {

    return (
        <div className="content">
            <h1>Projects</h1>
            <div className="subtitle">
                Things I've worked on.
            </div>
            <hr id="project-hr"/>
            <div className="project-grid">
                <div className="project-content">
                    <ProjectCard name="MAPP" desc="Built and deployed full-stack web application for locating and sharing scenic places." imageUrl="mapp.png" logoUrls={["django.png", "html-5.png", "css-3.png", "js.png"]} githubUrl='https://github.com/gub1th/mapp'/>
                </div>
                <div className="project-content">
                    <ProjectCard name="Housemates" desc="Swift Mobile Application for housekeeping efficiency, collaboration, and organization." imageUrl="HMLogo.png" logoUrls={["swift.png", "firebase.png"]} githubUrl='https://github.com/Housemates-Mobile-App/housemates_mobileapp' otherUrl='https://www.youtube.com/watch?v=JWnoy6bBSOo'/>
                    <ProjectCard name="Brotherhood Pong League" desc="A website to organize and track an interfraternal pong league." imageUrl="bpl.png" logoUrls={["postgres.png", "express.png", "react.png", "node-js.png"]} githubUrl='https://github.com/gub1th/bplPERN' />
                </div>
                <div className="project-content">
                    <ProjectCard name="Cubewalker" desc="An endless running game featuring 3D-graphics, simulated physics mechanics and simple AI." imageUrl="cubewalkerlogo.png" logoUrls={["python.png"]} githubUrl='https://github.com/gub1th/cubeWalker'/>
                    <ProjectCard name="Empyrean" desc="A 3D FPS battle royale game with a steampunk-inspired theme." imageUrl="empyreanlogo.png" logoUrls={["c-sharp.png", "unity.png"]} githubUrl='https://github.com/amyxlase/Project-Sapphire' otherUrl='https://www.gamecreation.org/games/empyrean'/>
                </div>
                <div className="project-content">
                    <ProjectCard name="CMU Lost and Found" desc="A website that digitizes Carnegie Mellon's Lost and Found system." imageUrl="cmulostandfoundlogo.png" logoUrls={["js.png", "react.png"]} />
                    <ProjectCard name="GoWeather" desc="An app that conveniently provides the weather news." imageUrl="goweatherlogo.png" logoUrls={["python.png"]} githubUrl='https://github.com/gub1th/goWeather'/>
                </div>
                <div className="project-content">
                    <ProjectCard name="Website V2" desc="The website you're viewing right now." imageUrl="websitev2.png" logoUrls={["js.png", "react.png"]} githubUrl='https://github.com/gub1th/portfolio2' otherUrl='https://gub1th.github.io/realPortfolio/'/>
                    <ProjectCard name="Website V1" desc="The original portfolio website I made." imageUrl="websitev1.jpeg" logoUrls={["html-5.png", "css-3.png", "js.png"]} githubUrl='https://github.com/gub1th/portfolio_Website' otherUrl='https://gub1th.github.io/portfolio_Website/'/>
                </div>
                <div className="project-content">
                    <ProjectCard name="Vacancy" desc="A Room Booking System that eases the reservation process." imageUrl="vacancylogo.png" logoUrls={["java.png", "mysql.png"]} />
                    <ProjectCard name="Tartan Monopoly" desc="Monopoly but with a tartanized twist!" imageUrl="tartanmonopolylogo.png" logoUrls={["python.png"]} />
                </div>
            </div>
        </div>
    )
}

export default Projects