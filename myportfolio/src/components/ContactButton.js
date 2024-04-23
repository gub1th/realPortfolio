const ContactButton = ({ text, iconUrl, link, id }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button class="general-button poppins-medium" id={id}>
                <img src={process.env.PUBLIC_URL + '/images/' + iconUrl} alt="icon" id="contact-button-real-image" />
                {text}
            </button>
        </a>
    )
}

export default ContactButton;