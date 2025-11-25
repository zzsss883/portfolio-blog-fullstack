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
      setError('Failed to load blog posts, please try again later');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog-page">
      <div className="container">
        <div className="page-header">
          <h1>Tech Blog</h1>
          <p>Sharing my learning experiences and technical insights</p>
        </div>
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>No blog posts yet</p>
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

