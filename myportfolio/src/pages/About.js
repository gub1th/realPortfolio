import React, { useState } from 'react';
import './About.css';
import EducationCard from '../components/EducationCard';
import CareerCard from '../components/CareerCard';
import SkillsFilterButton from '../components/SkillsFilterButton';
import SkillsScrollableCard from '../components/SkillsScrollableCard';

function About () {

    const [selectedFilter, setSelectedFilter] = useState("language");

    const handleFilterClick = (filter) => {
        if (filter === selectedFilter) {
            return
        } else {
            setSelectedFilter(filter);
        }
    };

    const skills = [
        { name: 'Python', category: 'language', iconUrl: "python.png" },
        { name: 'C', category: 'language', iconUrl: "letter-c.png" },
        { name: 'SQL', category: 'language', iconUrl: "database.png" },
        { name: 'Java', category: 'language', iconUrl: "java.png" },
        { name: 'Javascript', category: 'language', iconUrl: "js.png" },
        { name: 'Swift', category: 'language', iconUrl: "swift.png" },
        { name: 'HTML', category: 'language', iconUrl: "html-5.png" },
        { name: 'CSS', category: 'language', iconUrl: "css-3.png" },
        { name: 'SML', category: 'language', iconUrl: "smlnj.png" },
        { name: 'Ruby', category: 'language', iconUrl: "ruby.png" },
        { name: 'C#', category: 'language', iconUrl: "c-sharp.png" },
        { name: 'Assembly', category: 'language', iconUrl: "asm.png" },
        { name: 'R', category: 'language', iconUrl: "r.png" },
        { name: 'Node', category: 'technology', iconUrl: "node-js.png" },
        { name: 'Express', category: 'technology', iconUrl: "express.png" },
        { name: 'Django', category: 'technology', iconUrl: "django.png" },
        { name: 'React', category: 'technology', iconUrl: "react.png" },
        { name: 'MongoDB', category: 'technology', iconUrl: "mongo.png" },
        { name: 'PostgreSQL', category: 'technology', iconUrl: "postgres.png" },
        { name: 'MySQL', category: 'technology', iconUrl: "mysql.png" },
        { name: 'Firebase', category: 'technology', iconUrl: "firebase.png" },
        { name: 'Git', category: 'technology', iconUrl: "git.png" },
        {name: 'Docker', category: 'technology', iconUrl: "docker.png" },
        { name: 'Jest', category: 'technology', iconUrl: "jest.png" },
        { name: 'Unity', category: 'technology', iconUrl: "unity.png" }
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
                        <SkillsFilterButton name="languages" handleFilterClick={handleFilterClick} currFilter={selectedFilter}/>
                        <SkillsFilterButton name="technologies" handleFilterClick={handleFilterClick} currFilter={selectedFilter}/>
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
                    <CareerCard role="AI Research Intern" content="Comcast Labs • Sunnyvale, CA" timeframe="May 2022 - Aug 2022" timeframelength="3 months" imageUrl="comcast.png"/>
                </div>
                <div class="career-content">
                    <CareerCard role="CS Teaching Assistant" content="Carnegie Mellon University • Pittsburgh, PA" timeframe="Aug 2022 - May 2024" timeframelength="~2 years" imageUrl="cmu-seal.png"/>
                    <CareerCard role="Research Assistant for High Frequency Trader" content="Comcast Labs • Sunnyvale, CA" timeframe="Jul 2022 - Feb 2022" timeframelength="~1.5 years" imageUrl="gpc.jpeg"/>
                </div>
                <hr id="career-hr"></hr>
                <h3>Education</h3>
                <div class="subtitle">
                    My educational journey.
                </div>
                <EducationCard school="Carnegie Mellon University" content="Bachelor of Science in Information Systems • Minor in Computer Science" timeframe="2020 - 2024" imageUrl="cmu-seal.png"/>
                <EducationCard school="Beacon Academy" content="IB • Math, Physics, Bahasa Indonesia HL • Computer Science, Business, English SL" timeframe="2020 - 2024" imageUrl="logo192.png"/>
            </div>

        </div>
    )
}

export default About