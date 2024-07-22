import React from 'react';

const CareerCard = ({ role, content, timeframe, imageUrl, timeframelength }) => {
  return (
    <div className="about-card" id="career-card">
      <div className="about-card-image">
        <img src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt="Logo" id="career-card-real-image" />
      </div>
      <div className="about-card-content">
        <div className="poppins-medium">
          {role}
        </div>
        <div className="about-card-content-text">
          {content}
        </div>
        <div className="about-card-timeframe-text">
          {timeframe}
        </div>
        <div className="about-card-timeframelength-text">
          {timeframelength}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;