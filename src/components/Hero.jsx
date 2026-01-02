import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <p className="text-accent fade-in delay-1">Hi, my name is</p>
                <h1 className="hero-title fade-in delay-2">Md. Shakibul Alam.</h1>
                <h2 className="hero-subtitle fade-in delay-3">I build things for the web.</h2>
                <p className="hero-description fade-in delay-4">
                    I'm a Software Engineer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products at <span className="text-accent">BRAC IT Services Limited</span>.
                </p>
                <div className="fade-in delay-5" style={{ marginTop: '2rem' }}>
                    <a href="#projects" className="btn btn-primary">Check out my work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
