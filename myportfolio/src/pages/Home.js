import React from 'react'
import './Home.css'
import ContactButton from '../components/ContactButton';

function Home () {

    return (
        <div className="content">
            <h1>Hi, I'm Daniel</h1>
            Currently in Pittsburgh, PA
            <p>
            Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect 
            web experiences. I work with JavaScript and specialize in all-things web. I thrive on 
            collaborating with teams to deliver efficient, scalable, and visually appealing web applications.
            </p>
            <hr/>
            <div className="workTogetherCard">
                <h3 id="workTogetherText">Let's work together!</h3>
                <p>
                    I'm seeking a Full-Stack Web Developer / Software Engineer Internship for Summer 2024.
                    Feel free to email me to see how I can contribute.
                </p>
                <div id="contact-content">
                    <ContactButton id="email-contact-button" text="email" iconUrl="gmail.png" link="https://www.linkedin.com/in/danielfgunawan/" />
                    <ContactButton id="linkedin-contact-button" text="linkedin" iconUrl="linkedin.png" link="https://www.linkedin.com/in/danielfgunawan/" />
                    <ContactButton id="github-contact-button" text="github" iconUrl="github2.png" link="https://github.com/danielfgunawan" />
                    <ContactButton id="instagram-contact-button" text="instagram" iconUrl="instagram.png" link="https://github.com/danielfgunawan" />
                </div>
            </div>
        </div>
    )
}

export default Home