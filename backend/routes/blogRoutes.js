const express = require('express');
const router = express.Router();
const {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getComments,
  createComment
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.get('/', getBlogPosts);
router.get('/:id', getBlogPost);
router.get('/:postId/comments', getComments);

// Protected routes
router.post('/', protect, createBlogPost);
router.post('/:postId/comments', protect, createComment);

// Protected & Authorized routes
router.put('/:id', protect, authorize, updateBlogPost);
router.delete('/:id', protect, authorize, deleteBlogPost);

module.exports = router;

