import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard';

function Projects () {

    return (
        <div className="content">
            <h1>Projects</h1>
            <div class="subtitle">
                Things I've worked on.
            </div>
            <hr id="project-hr"/>
            <div className="project-content">
                <ProjectCard name="Cubewalker" desc="An endless running game featuring 3D-graphics, simulated physics mechanics and simple AI." imageUrl="logo192.png" logoUrls={["python.png"]} />
                <ProjectCard name="Empyrean" desc="A 3D FPS battle royale game with a steampunk-inspired theme." imageUrl="logo192.png" logoUrls={["c-sharp.png", "unity.png"]} />
            </div>
            <div className="project-content">
                <ProjectCard name="CMU Lost and Found" desc="A website that digitizes Carnegie Mellon's Lost and Found system." imageUrl="logo192.png" logoUrls={["js.png", "react.png"]} />
                <ProjectCard name="GoWeather" desc="An app that conveniently provides the weather news." imageUrl="logo192.png" logoUrls={["python.png"]} />
            </div>
            <div className="project-content">
                <ProjectCard name="Vacancy" desc="A Room Booking System that eases the reservation process." imageUrl="logo192.png" logoUrls={["java.png", "mysql.png"]} />
                <ProjectCard name="Tartan Monopoly" desc="Monopoly but with a tartanized twist!" imageUrl="logo192.png" logoUrls={["python.png"]} />
            </div>
        </div>
    )
}

export default Projects