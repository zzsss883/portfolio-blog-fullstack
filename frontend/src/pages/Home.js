import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-orb hero-orb-1"></div>
        <div className="hero-bg-orb hero-orb-2"></div>
        <div className="hero-bg-orb hero-orb-3"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for Projects</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Building</span>
            <span className="title-line title-gradient">Digital Dreams</span>
            <span className="title-line">Into Reality</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack Developer crafting immersive digital experiences
            with cutting-edge technology and creative vision.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Let's Talk</span>
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bento-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-tag">Overview</span>
            <h2 className="section-title">What I Create</h2>
          </div>

          <div className="bento-grid">
            {/* Large Featured Card */}
            <Link to="/projects" className="bento-card bento-large">
              <div className="bento-card-bg"></div>
              <div className="bento-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="bento-content">
                <h3>Projects</h3>
                <p>Web applications, mobile apps, and innovative solutions built with modern tech stack.</p>
                <span className="bento-link">
                  Explore Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
              <div className="bento-decoration">
                <div className="deco-circle"></div>
                <div className="deco-circle"></div>
                <div className="deco-circle"></div>
              </div>
            </Link>

            {/* Stats Card */}
            <div className="bento-card bento-stats">
              <div className="bento-card-bg"></div>
              <div className="stats-grid">
                <div className="stat-block">
                  <span className="stat-value">10+</span>
                  <span className="stat-name">Projects</span>
                </div>
                <div className="stat-block">
                  <span className="stat-value">3+</span>
                  <span className="stat-name">Years</span>
                </div>
                <div className="stat-block stat-highlight">
                  <span className="stat-value">100%</span>
                  <span className="stat-name">Passion</span>
                </div>
                <div className="stat-block">
                  <span className="stat-value">24/7</span>
                  <span className="stat-name">Support</span>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <Link to="/blog" className="bento-card bento-medium">
              <div className="bento-card-bg bento-bg-pink"></div>
              <div className="bento-icon bento-icon-pink">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <div className="bento-content">
                <h3>Blog</h3>
                <p>Thoughts on development, design, and tech innovations.</p>
                <span className="bento-link">
                  Read Articles
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Contact Card */}
            <Link to="/contact" className="bento-card bento-medium">
              <div className="bento-card-bg bento-bg-cyan"></div>
              <div className="bento-icon bento-icon-cyan">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div className="bento-content">
                <h3>Contact</h3>
                <p>Have a project in mind? Let's make it happen together.</p>
                <span className="bento-link">
                  Say Hello
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Tech Stack Card */}
            <div className="bento-card bento-tech">
              <div className="bento-card-bg"></div>
              <h3>Tech Stack</h3>
              <div className="tech-pills">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">MongoDB</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">AWS</span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bento-card bento-quote">
              <div className="bento-card-bg bento-bg-gradient"></div>
              <div className="quote-mark">"</div>
              <p className="quote-text">
                Great software is built with passion, precision, and a deep understanding of user needs.
              </p>
              <div className="quote-author">— Design Philosophy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-bg-effects">
              <div className="cta-orb cta-orb-1"></div>
              <div className="cta-orb cta-orb-2"></div>
            </div>
            <div className="cta-content">
              <h2>Ready to Start Something Amazing?</h2>
              <p>Let's collaborate and bring your ideas to life with cutting-edge technology.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a Project
                </Link>
                <Link to="/projects" className="btn btn-ghost">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
