import React from 'react';
import './Experiences.css';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
    { title: 'House Captain', desc: 'Leader and mentor for over 30 students in the Water House. Helped organize and coordinate all school and sport-related events.', imageUrl: "logo192.png" },
    { title: 'Tennis Player', desc: 'Played competitive tennis for 10+ years. At the junior level, I ranked 6th nationally in Indonesia, and 1594 internationally.', imageUrl: "logo192.png" },
    { title: 'Junior Volunteer', desc: 'First teenage member of Pempek Funnywati, a local charity and organization. Taught math and english to kids. Arranged funding and distribution of food to both orphanages and retirement homes.', imageUrl: "logo192.png" },
    { title: 'Scottylabs', desc: 'Part of the CMU Lost and Found Project. Collaborated with others to develop official website.', imageUrl: "logo192.png" },
    { title: 'Game Creation Society', desc: 'Part of the Empyrean Project. Collaborated with a team of programmers and designers to create a 3D FPS multiplayer.', imageUrl: "logo192.png" },
    { title: 'TOK Conference Leader', desc: 'Conference and workshop leader for Indonesias first ever Theory of Knowledge conference. The theme was "This is not a Conference".', imageUrl: "logo192.png" }
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