import '@fortawesome/fontawesome-free/css/all.min.css';

const ProjectCard = ({ name, desc, imageUrl, logoUrls, githubUrl="#", otherUrl="#" }) => {
    return (
        <div className="project-card">
            <div className="project-card-image">
                <img className="main-image" src={process.env.PUBLIC_URL + '/images/' + imageUrl} alt="Logo" />
                <div className="overlay">
                    <div className="overlay-content">
                        {otherUrl !== "#" && (
                            <a href={otherUrl} className="overlay-icon" title="View App">
                                <i className="fas fa-eye"></i>
                            </a>
                        )}
                        {githubUrl !== "#" && (
                            <a href={githubUrl} className="overlay-icon" title="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                    </div>
                </div>
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