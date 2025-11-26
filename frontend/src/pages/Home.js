import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'WELCOME TO THE MATRIX_';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Terminal Hero */}
      <section className="terminal-hero">
        <div className="scanline-overlay"></div>
        <div className="terminal-grid">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">SYSTEM.TERMINAL</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">&gt; <span className="cyber-green">INITIALIZING SYSTEM...</span></p>
              <p className="terminal-line">&gt; <span className="cyber-cyan">LOADING PORTFOLIO...</span></p>
              <p className="terminal-line">&gt; <span className="cyber-magenta">ESTABLISHING CONNECTION...</span></p>
              <p className="terminal-line">&gt; <span className="cyber-yellow">STATUS: ONLINE</span></p>
              <p className="terminal-line terminal-blink">&gt; <span className="cyber-white">{terminalText}</span></p>
            </div>
          </div>

          <div className="hero-content-cyber">
            <div className="glitch-title" data-text="FULL-STACK">
              <h1>FULL-STACK</h1>
            </div>
            <div className="glitch-title" data-text="DEVELOPER">
              <h1>DEVELOPER</h1>
            </div>
            <p className="cyber-subtitle">
              &lt; BUILDING THE FUTURE / ONE LINE AT A TIME &gt;
            </p>
            <div className="cyber-stats-inline">
              <div className="stat-inline">
                <span className="stat-num">10+</span>
                <span className="stat-label">PROJECTS</span>
              </div>
              <div className="stat-inline">
                <span className="stat-num">3+</span>
                <span className="stat-label">YEARS</span>
              </div>
              <div className="stat-inline">
                <span className="stat-num">99%</span>
                <span className="stat-label">UPTIME</span>
              </div>
            </div>
            <div className="hero-actions-cyber">
              <Link to="/projects" className="btn btn-primary">
                [ VIEW PROJECTS ]
              </Link>
              <Link to="/contact" className="btn btn-outline">
                [ CONTACT ]
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen Features */}
      <section className="split-features">
        <div className="container">
          <div className="section-header-cyber">
            <span className="cyber-bracket">[</span>
            <h2>SYSTEM MODULES</h2>
            <span className="cyber-bracket">]</span>
          </div>

          <div className="feature-grid-cyber">
            {/* Projects Module */}
            <Link to="/projects" className="cyber-panel feature-panel">
              <div className="panel-corner top-left"></div>
              <div className="panel-corner top-right"></div>
              <div className="panel-corner bottom-left"></div>
              <div className="panel-corner bottom-right"></div>

              <div className="panel-header">
                <span className="panel-id">[MOD_01]</span>
                <span className="panel-status">ACTIVE</span>
              </div>
              <div className="panel-icon">
                <div className="icon-hex">
                  <span>&#x2328;</span>
                </div>
              </div>
              <h3>PROJECTS</h3>
              <p>{'// '}Explore portfolio of applications and solutions</p>
              <div className="panel-footer">
                <span className="cyber-arrow">&gt;&gt;</span>
                <span>ACCESS MODULE</span>
              </div>
            </Link>

            {/* Blog Module */}
            <Link to="/blog" className="cyber-panel feature-panel">
              <div className="panel-corner top-left"></div>
              <div className="panel-corner top-right"></div>
              <div className="panel-corner bottom-left"></div>
              <div className="panel-corner bottom-right"></div>

              <div className="panel-header">
                <span className="panel-id">[MOD_02]</span>
                <span className="panel-status">ACTIVE</span>
              </div>
              <div className="panel-icon">
                <div className="icon-hex">
                  <span>&#x1F4E1;</span>
                </div>
              </div>
              <h3>BLOG</h3>
              <p>{'// '}Technical insights and development logs</p>
              <div className="panel-footer">
                <span className="cyber-arrow">&gt;&gt;</span>
                <span>ACCESS MODULE</span>
              </div>
            </Link>

            {/* Contact Module */}
            <Link to="/contact" className="cyber-panel feature-panel">
              <div className="panel-corner top-left"></div>
              <div className="panel-corner top-right"></div>
              <div className="panel-corner bottom-left"></div>
              <div className="panel-corner bottom-right"></div>

              <div className="panel-header">
                <span className="panel-id">[MOD_03]</span>
                <span className="panel-status">ACTIVE</span>
              </div>
              <div className="panel-icon">
                <div className="icon-hex">
                  <span>&#x1F4E7;</span>
                </div>
              </div>
              <h3>CONTACT</h3>
              <p>{'// '}Establish communication channel</p>
              <div className="panel-footer">
                <span className="cyber-arrow">&gt;&gt;</span>
                <span>ACCESS MODULE</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Display */}
      <section className="tech-display">
        <div className="container">
          <div className="tech-monitor">
            <div className="monitor-screen">
              <div className="monitor-header">
                <span>TECH_STACK.SYS</span>
                <span className="monitor-blink">●</span>
              </div>
              <div className="tech-grid">
                <div className="tech-item">
                  <span className="tech-icon">▓</span>
                  <span className="tech-name">REACT.JS</span>
                  <div className="tech-bar">
                    <div className="tech-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">▓</span>
                  <span className="tech-name">NODE.JS</span>
                  <div className="tech-bar">
                    <div className="tech-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">▓</span>
                  <span className="tech-name">MONGODB</span>
                  <div className="tech-bar">
                    <div className="tech-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">▓</span>
                  <span className="tech-name">PYTHON</span>
                  <div className="tech-bar">
                    <div className="tech-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-cyber">
        <div className="container">
          <div className="cta-frame">
            <div className="frame-corners">
              <span className="corner-tl"></span>
              <span className="corner-tr"></span>
              <span className="corner-bl"></span>
              <span className="corner-br"></span>
            </div>
            <div className="cta-content">
              <h2 className="cta-title">
                <span className="cyber-bracket">&lt;</span>
                READY TO COLLABORATE?
                <span className="cyber-bracket">/&gt;</span>
              </h2>
              <p className="cta-text">
                {'// '}Let's build something extraordinary together
              </p>
              <Link to="/contact" className="btn btn-primary btn-large">
                [ INITIATE CONTACT ]
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
