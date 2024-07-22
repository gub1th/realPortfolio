const SkillsFilterButton = ({ name, handleFilterClick, currFilter }) => {
    return (
        <button className={`skills-filter-button ${currFilter === name ? 'active' : ''}`} onClick={() => handleFilterClick(name)}>
            {name}
        </button>
    )
}

export default SkillsFilterButton;