import React, { useState } from 'react';
import './About.css';
import EducationCard from '../components/EducationCard';
import CareerCard from '../components/CareerCard';
import SkillsFilterButton from '../components/SkillsFilterButton';
import SkillsScrollableCard from '../components/SkillsScrollableCard';

function About () {

    const [selectedFilter, setSelectedFilter] = useState("frontend");

    const handleFilterClick = (filter) => {
        if (filter === selectedFilter) {
            return
        } else {
            setSelectedFilter(filter);
        }
    };

    const skills = [
        { name: 'HTML', category: 'frontend', iconUrl: "logo192.png" },
        { name: 'CSS', category: 'frontend', iconUrl: "logo192.png" },
        { name: 'JavaScript', category: 'frontend', iconUrl: "logo192.png" },
        { name: 'React', category: 'frontend', iconUrl: "logo192.png" },
        { name: 'Node.js', category: 'backend', iconUrl: "logo192.png" },
        { name: 'Python', category: 'backend', iconUrl: "logo192.png" },
        { name: 'MySQL', category: 'database', iconUrl: "logo192.png" },
        { name: 'MongoDB', category: 'database', iconUrl: "logo192.png" },
    ];

    const filteredSkills = skills.filter((skill) => skill.category === selectedFilter);


    return (
        <div className="content">
            <div>
                <h1>About</h1>
                <div class="subtitle">
                    Nice to meet me.
                </div>
                <hr></hr>
                <p>
                My name is daniel gunawna. i grew up somewhere and here and there and what i have been working on is 
                web experiences. I work with JavaScript and specialize in all-things web. I thrive on 
                collaborating with teams to deliver efficient, scalable, and visually appealing web applications.
                </p>
                <button className="general-button poppins-medium" id="view-resume-button">View Resume</button>
            </div>
            <div>
                <h3>Skills</h3>
                <div class="subtitle">
                    My professional skills.
                </div>
                <div className="skills-content">
                    <div className="skills-filter">
                        <SkillsFilterButton name="frontend" handleFilterClick={handleFilterClick} currFilter={selectedFilter}/>
                        <SkillsFilterButton name="backend" handleFilterClick={handleFilterClick} currFilter={selectedFilter}/>
                        <SkillsFilterButton name="database" handleFilterClick={handleFilterClick} currFilter={selectedFilter}/>
                    </div>
                    <div className="skills-scrollable-list">
                        {filteredSkills.map((skill, index) => (
                            <SkillsScrollableCard key={index} name={skill.name} iconUrl={skill.iconUrl}/>
                        )
                        )}
                    </div>
                </div>
                <hr></hr>
                <h3>Career</h3>
                <div class="subtitle">
                    My career journey.
                </div>
                <div class="career-content">
                    <CareerCard role="Software Engineer Intern" content="Atlassian • New York City, NY" timeframe="May 2023 - Aug 2023" timeframelength="3 months" imageUrl="atlassian.png"/>
                    <CareerCard role="AI Research Intern" content="Comcast Labs • Sunnyvale, CA" timeframe="May 2022 - Aug 2022" timeframelength="3 months" imageUrl="logo192.png"/>
                </div>
                <div class="career-content">
                    <CareerCard role="Software Engineer Intern" content="Atlassian • New York City, NY" timeframe="May 2023 - Aug 2023" timeframelength="3 months" imageUrl="atlassian.png"/>
                    <CareerCard role="AI Research Intern" content="Comcast Labs • Sunnyvale, CA" timeframe="May 2022 - Aug 2022" timeframelength="3 months" imageUrl="logo192.png"/>
                </div>
                <hr></hr>
                <h3>Education</h3>
                <div class="subtitle">
                    My educational journey.
                </div>
                <EducationCard school="Carnegie Mellon University" content="Bachelor of Science in Information Systems • Minor in Computer Science" timeframe="2020 - 2024" imageUrl="logo192.png"/>
                <EducationCard school="Beacon Academy" content="IB • Math, Physics, Bahasa Indonesia HL • Computer Science, Business, English SL" timeframe="2020 - 2024" imageUrl="logo192.png"/>
            </div>

        </div>
    )
}

export default About