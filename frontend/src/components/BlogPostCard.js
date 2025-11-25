import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostCard.css';

const BlogPostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-card card">
      <div className="blog-header">
        <h3 className="blog-title">
          <Link to={`/blog/${post._id}`}>{post.title}</Link>
        </h3>
        <div className="blog-meta">
          <span className="blog-author">Author: {post.author?.username || 'Unknown'}</span>
          <span className="blog-date">{formatDate(post.createdAt)}</span>
        </div>
      </div>
      <p className="blog-excerpt">
        {post.content.length > 150
          ? `${post.content.substring(0, 150)}...`
          : post.content}
      </p>
      <Link to={`/blog/${post._id}`} className="btn btn-primary btn-small">
        Read More
      </Link>
    </div>
  );
};

export default BlogPostCard;

