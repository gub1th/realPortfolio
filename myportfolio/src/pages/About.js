import React, { useState } from 'react';
import './About.css';
import EducationCard from '../components/EducationCard';
import CareerCard from '../components/CareerCard';
import SkillsFilterButton from '../components/SkillsFilterButton';
import SkillsScrollableCard from '../components/SkillsScrollableCard';

function About () {

    const [selectedFilter, setSelectedFilter] = useState("languages");

    const handleFilterClick = (filter) => {
        if (filter === selectedFilter) {
            return
        } else {
            setSelectedFilter(filter);
        }
    };

    const handleViewResumeClick = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1hCTrgRLJqNuzg0ViFpl_5Yng2M5ZkRd_/view?usp=sharing'
        window.open(resumeUrl, '_blank')
    };

    const skills = [
        { name: 'Python', category: 'languages', iconUrl: "python.png" },
        { name: 'C', category: 'languages', iconUrl: "letter-c.png" },
        { name: 'SQL', category: 'languages', iconUrl: "database.png" },
        { name: 'Java', category: 'languages', iconUrl: "java.png" },
        { name: 'Javascript', category: 'languages', iconUrl: "js.png" },
        { name: 'Swift', category: 'languages', iconUrl: "swift.png" },
        { name: 'HTML', category: 'languages', iconUrl: "html-5.png" },
        { name: 'CSS', category: 'languages', iconUrl: "css-3.png" },
        { name: 'SML', category: 'languages', iconUrl: "smlnj.png" },
        { name: 'Ruby', category: 'languages', iconUrl: "ruby.png" },
        { name: 'C#', category: 'languages', iconUrl: "c-sharp.png" },
        { name: 'Assembly', category: 'languages', iconUrl: "asm.png" },
        { name: 'R', category: 'languages', iconUrl: "r.png" },
        { name: 'Node', category: 'technologies', iconUrl: "node-js.png" },
        { name: 'Express', category: 'technologies', iconUrl: "express.png" },
        { name: 'Django', category: 'technologies', iconUrl: "django.png" },
        { name: 'React', category: 'technologies', iconUrl: "react.png" },
        { name: 'MongoDB', category: 'technologies', iconUrl: "mongo.png" },
        { name: 'PostgreSQL', category: 'technologies', iconUrl: "postgres.png" },
        { name: 'MySQL', category: 'technologies', iconUrl: "mysql.png" },
        { name: 'Firebase', category: 'technologies', iconUrl: "firebase.png" },
        { name: 'Git', category: 'technologies', iconUrl: "git.png" },
        {name: 'Docker', category: 'technologies', iconUrl: "docker.png" },
        { name: 'Jest', category: 'technologies', iconUrl: "jest.png" },
        { name: 'Unity', category: 'technologies', iconUrl: "unity.png" }
    ];

    const filteredSkills = skills.filter((skill) => skill.category === selectedFilter);

    return (
        <div className="content">
            <div>
                <h1>About</h1>
                <div className="subtitle">
                    Nice to meet me.
                </div>
                <hr></hr>
                <p>
                    Hi there, and welcome to the website. I'm not sure what to put here, so here are some things about me.
                    <div id="fact-box">
                        ‣ i enjoy ideating about cool products to build, and learning about new technologies.
                        <br />
                        ‣ i enjoy playing and watching tennis and basketball.
                        <br />
                        ‣ i enjoy freestyle rapping sometimes. i was a teaching assistant last year!
                        <br />
                        ‣ i wish i had a dog.
                    </div>
                
                </p>
                <button className="general-button poppins-medium" id="view-resume-button" onClick={handleViewResumeClick}>
                    View Resume
                </button>
            </div>
            <div>
                <h3>Skills</h3>
                <div className="subtitle">
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
                <div className="subtitle">
                    My career journey.
                </div>
                <div className="career-content">
                    <CareerCard role="Software Engineer" content="Atlassian • San Francisco, CA" timeframe="Jul 2024 - Present" timeframelength="Ongoing" imageUrl="atlassian.png"/>
                </div>
                <div className="career-content">
                    <CareerCard role="Software Engineer Intern" content="Atlassian • New York City, NY" timeframe="May 2023 - Aug 2023" timeframelength="3 months" imageUrl="atlassian.png"/>
                    <CareerCard role="AI Research Intern" content="Comcast Labs • Sunnyvale, CA" timeframe="May 2022 - Aug 2022" timeframelength="3 months" imageUrl="comcast.png"/>
                </div>
                <div className="career-content">
                    <CareerCard role="CS Teaching Assistant" content="Carnegie Mellon University • Pittsburgh, PA" timeframe="Aug 2022 - May 2024" timeframelength="~2 years" imageUrl="cmu-seal.png"/>
                    <CareerCard role="Research Assistant for High Frequency Trader" content="Comcast Labs • Sunnyvale, CA" timeframe="Jul 2022 - Feb 2022" timeframelength="~1.5 years" imageUrl="gpc.jpeg"/>
                </div>
                <hr id="career-hr"></hr>
                <h3>Education</h3>
                <div className="subtitle">
                    My educational journey.
                </div>
                <EducationCard school="Carnegie Mellon University" content="Bachelor of Science in Information Systems • Minor in Computer Science" timeframe="2020 - 2024" imageUrl="cmu-seal.png"/>
                <EducationCard school="Beacon Academy" content="IB • Math, Physics, Bahasa Indonesia HL • Computer Science, Business, English SL" timeframe="2020 - 2024" imageUrl="logo192.png"/>
            </div>

        </div>
    )
}

export default About