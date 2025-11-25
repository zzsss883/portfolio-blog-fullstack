import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">Portfolio</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/projects" className="nav-link">项目</Link>
            <Link to="/blog" className="nav-link">博客</Link>
            <Link to="/contact" className="nav-link">联系</Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="nav-link">管理</Link>
                <button onClick={logout} className="btn btn-outline btn-small">
                  退出
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">登录</Link>
                <Link to="/register" className="btn btn-primary btn-small">
                  注册
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

