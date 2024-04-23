import React from 'react';

const EducationCard = ({ school, content, timeframe, imageUrl }) => {
  return (
    <div className="about-card" id="education-card">
      <div className="about-card-image">
        <img src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt="Logo" id="education-card-real-image" />
      </div>
      <div className="about-card-content">
        <div className="poppins-medium">
          {school}
        </div>
        <div className="about-card-content-text">
          {content}
        </div>
        <div className="about-card-timeframe-text">
          {timeframe}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;