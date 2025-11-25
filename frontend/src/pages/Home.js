import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to My
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              I'm a Full-Stack Developer focused on creating beautiful and powerful web applications.
              Here you can explore my projects, read my blog posts, and get in touch with me.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                Read Blog
              </Link>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card card">
            <div className="feature-icon">🚀</div>
            <h3>Project Showcase</h3>
            <p>Browse my completed projects, including web apps, mobile apps, and more.</p>
            <Link to="/projects" className="btn btn-outline btn-small">
              View Projects
            </Link>
          </div>
          <div className="feature-card card">
            <div className="feature-icon">📝</div>
            <h3>Tech Blog</h3>
            <p>Share my learning experiences, technical insights, and development expertise.</p>
            <Link to="/blog" className="btn btn-outline btn-small">
              Read Blog
            </Link>
          </div>
          <div className="feature-card card">
            <div className="feature-icon">💬</div>
            <h3>Contact Me</h3>
            <p>Have any questions or collaboration opportunities? Feel free to reach out.</p>
            <Link to="/contact" className="btn btn-outline btn-small">
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

