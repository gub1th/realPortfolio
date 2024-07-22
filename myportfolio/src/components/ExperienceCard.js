import React from 'react';

const ExperienceCard = ({ title, desc, imageUrl }) => {

    return (
        <div className="experience-card">
            <div className="experience-card-image">
                <img src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt="Logo" className="experience-card-real-image" />
            </div>
            <div className="experience-card-content">
                <div className="poppins-medium experience-card-title">
                    {title}
                </div>
                <div className="experience-card-description">
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;