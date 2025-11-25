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
              欢迎来到我的
              <span className="gradient-text">作品集</span>
            </h1>
            <p className="hero-subtitle">
              我是一名全栈开发者，专注于创建美观且功能强大的Web应用程序。
              在这里，您可以查看我的项目、阅读我的博客文章，并与我取得联系。
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                查看项目
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                阅读博客
              </Link>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card card">
            <div className="feature-icon">🚀</div>
            <h3>项目展示</h3>
            <p>浏览我完成的各种项目，包括Web应用、移动应用等。</p>
            <Link to="/projects" className="btn btn-outline btn-small">
              查看项目
            </Link>
          </div>
          <div className="feature-card card">
            <div className="feature-icon">📝</div>
            <h3>技术博客</h3>
            <p>分享我的学习心得、技术见解和开发经验。</p>
            <Link to="/blog" className="btn btn-outline btn-small">
              阅读博客
            </Link>
          </div>
          <div className="feature-card card">
            <div className="feature-icon">💬</div>
            <h3>联系我</h3>
            <p>有任何问题或合作意向？随时与我取得联系。</p>
            <Link to="/contact" className="btn btn-outline btn-small">
              发送消息
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

