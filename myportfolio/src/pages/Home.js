import React from 'react'
import './Home.css'
import ContactButton from '../components/ContactButton';

function Home () {

    const handleEmailClick = () => {
        const emailAddress = 'danielfgunawan1@gmail.com';
        const subject = 'Hi Daniel!';
        const body = 'hi friend!';
        const emailUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
        window.location.href = emailUrl;
    };

    return (
        <div className="content">
            <h1>Hi, I'm Daniel</h1>
            <div className="subtitle">
                Currently in San Francisco, CA
            </div>
            <hr />
            <p>
                I'm a software engineer at <span id="atlassian-text" className="poppins-bold">Atlassian</span>. I recently graduated from <span id="cmu-text" className="poppins-bold">Carnegie Mellon</span> 
                , where I studied <span id="is-text" className="poppins-medium">Information Systems</span> and <span id="cs-text"className="poppins-medium">CS</span>. 
                I've always been more of a backend developer, but I'm currently exploring full-stack and it's been pretty fun!
                I'm always curious about tech and business, and love learning about and building new things.
            </p>
            <div className="workTogetherCard">
                <h3 id="workTogetherText">Let's work together!</h3>
                <p>
                    I'm constantly seeking software opportunities to learn and grow from.
                    Feel free to email me to see how I can contribute.
                </p>
                <div id="contact-content" className="responsive-contact-buttons">
                    <ContactButton id="email-contact-button" text="email" iconUrl="gmail.png" link="thisdoesntmatter" onClick={handleEmailClick}/>
                    <ContactButton id="linkedin-contact-button" text="linkedin" iconUrl="linkedin.png" link="https://www.linkedin.com/in/danielfgunawan/"/>
                    <ContactButton id="github-contact-button" text="github" iconUrl="github2.png" link="https://github.com/gub1th"/>
                    <ContactButton id="instagram-contact-button" text="instagram" iconUrl="instagram.png" link="https://www.instagram.com/danielfgunawan?igsh=MTY0ejk4ZWN1ZnkwNQ%3D%3D&utm_source=qr"/>
                </div>
            </div>
        </div>
    )
}

export default Home