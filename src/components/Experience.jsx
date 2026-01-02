import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "BRAC IT Services Limited",
            role: "Software Engineer",
            duration: "February 2022 - Present",
            location: "Dhaka",
            points: [
                "Developed and maintained scalable web applications using Java, Spring Boot, and Angular.",
                "Implemented Test Driven Development utilizing JUnit and Mockito.",
                "Integrated caching mechanisms using Redis and communication via RabbitMQ.",
                "Contributed to the ERP application integrating loan modules used by 3500+ BRAC offices.",
                "Developed modules for HR & Payroll Management Solution including salary generation, tax management, and employee self-services.",
                "Built a Post-Disaster Management Solution serving multiple NGOs.",
                "Created a Webhook Notification System handling 100k+ daily notifications.",
                "Conducted code reviews and mentored junior team members."
            ]
        },
        {
            company: "BRAC IT Services Limited",
            role: "Intern",
            duration: "October 2021 - January 2022",
            location: "Dhaka",
            points: [
                "Assisted in the development of key features for the HR and Payroll Solution.",
                "Gained hands-on experience in Java, Spring Boot, and Angular.",
                "Collaborated with the development team to troubleshoot and resolve issues.",
                "Participated in Agile development methodologies."
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2>Where I've Worked</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <h3>{exp.role} <span className="text-accent">@ {exp.company}</span></h3>
                                <span className="experience-duration">{exp.duration}</span>
                            </div>
                            <ul className="experience-points">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
