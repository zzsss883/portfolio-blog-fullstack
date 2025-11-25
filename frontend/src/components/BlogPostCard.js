import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostCard.css';

const BlogPostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
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
          <span className="blog-author">作者: {post.author?.username || '未知'}</span>
          <span className="blog-date">{formatDate(post.createdAt)}</span>
        </div>
      </div>
      <p className="blog-excerpt">
        {post.content.length > 150
          ? `${post.content.substring(0, 150)}...`
          : post.content}
      </p>
      <Link to={`/blog/${post._id}`} className="btn btn-primary btn-small">
        阅读更多
      </Link>
    </div>
  );
};

export default BlogPostCard;

