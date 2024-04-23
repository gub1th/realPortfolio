const ProjectCard = ({ name, desc, imageUrl, logoUrls }) => {
    return (
        <div className="project-card">
            <div className="project-card-image">
                <img className="main-image" src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt="Logo" />
            </div>
            <div className="project-card-content">
                <div className="poppins-medium project-card-name">
                    {name}
                </div>
                <div className="project-card-desc">
                    {desc}
                </div>
                <div className="project-card-logos">
                    {logoUrls.map((logoUrl, index) => (
                        <img
                        key={index}
                        className="logo-image"
                        src={process.env.PUBLIC_URL + '/images/' + logoUrl}
                        alt="Logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;