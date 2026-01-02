import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
        const foundProject = projectsData.find(p => p.id === id);
        setProject(foundProject);
    }, [id, location]);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="project-details-page fade-in">

            {/* Navigation Breadcrumb */}
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '20px' }}>
                <Link to="/" className="back-link">
                    &larr; Back to Portfolio
                </Link>
            </div>

            {/* Header Section */}
            <section className="project-header">
                <div className="container">
                    <h1 className="project-title-large">{project.title}</h1>
                    <div className="project-meta">
                        <div className="tech-stack-row">
                            {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                        </div>
                        <div className="project-links-row">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn">
                                    View Code
                                </a>
                            )}
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="project-body">
                <div className="container">

                    {/* Hero Image */}
                    <div className="project-hero-image">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-grid">
                        <div className="project-main-info">
                            <h2>Overview</h2>
                            <div className="project-description-text">
                                {project.fullDescription.split('\n').map((para, i) => (
                                    para.trim() && <p key={i}>{para.trim()}</p>
                                ))}
                            </div>

                            <h2>Key Features</h2>
                            <ul className="features-list">
                                {project.features.map((feature, index) => {
                                    const [bold, text] = feature.split('**:');
                                    return (
                                        <li key={index}>
                                            {text ? (
                                                <><strong>{bold.replace('**', '')}:</strong> {text}</>
                                            ) : (
                                                feature
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            {project.challenges && (
                                <>
                                    <h2>Technical Challenges</h2>
                                    <p className="challenges-text">{project.challenges}</p>
                                </>
                            )}
                        </div>

                        <div className="project-sidebar">
                            {/* Video Showcase */}
                            <div className="sidebar-widget">
                                <h3>Video Walkthrough</h3>
                                {project.youtubeId ? (
                                    <div className="video-container">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                ) : (
                                    <div className="video-placeholder">
                                        <p>Video demo coming soon</p>
                                    </div>
                                )}
                            </div>

                            {/* Quick Stats or Info */}
                            <div className="sidebar-widget">
                                <h3>Technology Stack</h3>
                                <ul className="sidebar-tech-list">
                                    {project.tech.map(t => <li key={t}>{t}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="project-footer-cta">
                <div className="container text-center">
                    <h3>Want to build something similar?</h3>
                    <Link to="/#contact" className="btn btn-primary big-btn">Get In Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
