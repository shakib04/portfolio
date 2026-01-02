import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container text-center">
                <p className="text-accent">What's Next?</p>
                <h2>Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="contact-links">
                    <a href="mailto:mdshakibulalam@gmail.com" className="btn btn-primary big-btn">Say Hello</a>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/md-shakibul-alam-067138157/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/shakib04" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
