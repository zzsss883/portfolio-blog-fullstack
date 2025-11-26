import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Build beautiful experiences
            </h1>
            <p className="hero-subtitle slide-up">
              Full-stack developer crafting elegant solutions with modern technologies
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary btn-large">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="features-grid">
            <Link to="/projects" className="feature-card card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Projects</h3>
              <p>Explore a collection of applications and solutions built with cutting-edge technologies</p>
            </Link>

            <Link to="/blog" className="feature-card card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Blog</h3>
              <p>Technical insights, tutorials, and thoughts on software development</p>
            </Link>

            <Link to="/contact" className="feature-card card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Contact</h3>
              <p>Let's collaborate on your next project or discuss new opportunities</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack section section-bg">
        <div className="container">
          <div className="section-header">
            <h2>Technologies</h2>
            <p>Building with modern and proven tools</p>
          </div>

          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-info">
                <span className="tech-name">React</span>
                <span className="tech-level">Advanced</span>
              </div>
              <div className="tech-bar-wrapper">
                <div className="tech-bar">
                  <div className="tech-progress" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-info">
                <span className="tech-name">Node.js</span>
                <span className="tech-level">Advanced</span>
              </div>
              <div className="tech-bar-wrapper">
                <div className="tech-bar">
                  <div className="tech-progress" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-info">
                <span className="tech-name">MongoDB</span>
                <span className="tech-level">Proficient</span>
              </div>
              <div className="tech-bar-wrapper">
                <div className="tech-bar">
                  <div className="tech-progress" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-info">
                <span className="tech-name">Python</span>
                <span className="tech-level">Proficient</span>
              </div>
              <div className="tech-bar-wrapper">
                <div className="tech-bar">
                  <div className="tech-progress" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's create something extraordinary</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
