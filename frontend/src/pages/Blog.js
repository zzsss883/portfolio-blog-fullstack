import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostCard from '../components/BlogPostCard';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/blog`
      );
      setPosts(response.data.data);
      setError(null);
    } catch (err) {
      setError('加载博客文章失败，请稍后重试');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog-page">
      <div className="container">
        <div className="page-header">
          <h1>技术博客</h1>
          <p>分享我的学习心得和技术见解</p>
        </div>
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>暂无博客文章</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

