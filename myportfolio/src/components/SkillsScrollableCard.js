const SkillsScrollableCard = ({ name, iconUrl }) => {
    return (
        <div className="skills-scrollable-card">
            <img className="skills-logo-image" src={process.env.PUBLIC_URL + '/images/' + iconUrl} alt="Logo" />
            {name}
        </div>
    )
}

export default SkillsScrollableCard;