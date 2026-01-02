import React from 'react';

const Skills = () => {
    const skills = {
        "Languages": ["Java", "TypeScript", "SQL"],
        "Frameworks": ["Spring Boot", "Angular", "Hibernate", "Spring Cloud Stream", "Docker", "Gradle"],
        "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "MinIO"],
        "Tools & Others": ["RabbitMQ", "JUnit", "Mockito", "Git", "Linux", "Jira", "ELK Stack"]
    };

    return (
        <section id="skills">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <ul className="skill-list">
                                {items.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
