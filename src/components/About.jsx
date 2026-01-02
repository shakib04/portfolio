import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! My name is Shakibul and I enjoy creating things that live on the internet.
                            My interest in software engineering started back in 2018 when I decided to try editing custom Tumblr themes —
                            turns out hacking together HTML & CSS was fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at a <span className="text-accent">large NGO's IT division (BRAC IT)</span>.
                            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                        <p>
                            I specialize in <strong>Java (Spring Boot)</strong> and <strong>Frontend (Angular)</strong>.
                            I have developed, maintained, and guided the development of Fin-Tech, HR Management Solutions, and Microservice web applications.
                        </p>
                    </div>
                    <div className="about-img">
                        <div className="img-wrapper">
                            <img src="/profile.png" alt="Md. Shakibul Alam" style={{ width: '100%', borderRadius: '4px', display: 'block', backgroundColor: '#112240' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
