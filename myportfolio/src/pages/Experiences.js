import React from 'react';
import './Experiences.css';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
    { title: 'Tennis', desc: 'I was a tennis player in indonesia and beyond', imageUrl: "logo192.png" },
    { title: 'Tennis', desc: 'I was a tennis player in indonesia and beyond', imageUrl: "logo192.png" },
    { title: 'Tennis', desc: 'I was a tennis player in indonesia and beyond', imageUrl: "logo192.png" },
    { title: 'Tennis', desc: 'I was a tennis player in indonesia and beyond', imageUrl: "logo192.png" }
];

function Experiences () {

    return (
        <div className="content">
            <h1>Experiences</h1>
            <div class="subtitle">
                Other things I've done.
            </div>
            <hr></hr>
            <div className="experiences-content">
                {experiences.map((experience, index) => (
                    <ExperienceCard title={experience.title} desc={experience.desc} imageUrl={experience.imageUrl} />
                ))}
            </div>
        </div>
    )
}

export default Experiences