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
            <hr></hr>
            <div className="project-content">
                <ProjectCard name="Bracketmaker" desc="A very cool game for very cool kids" imageUrl="logo192.png" logoUrls={["logo192.png", "logo192.png"]} />
                <ProjectCard name="Bracketmaker" desc="A very cool game for very cool kids" imageUrl="logo192.png" logoUrls={["logo192.png"]} />
            </div>
            <div className="project-content">
                <ProjectCard name="Bracketmaker" desc="A very cool game for very cool kids" imageUrl="logo192.png" logoUrls={["logo192.png"]} />
            </div>
        </div>
    )
}

export default Projects