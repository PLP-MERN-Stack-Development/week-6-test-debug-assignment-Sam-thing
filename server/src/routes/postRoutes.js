const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', authMiddleware, createPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);


// @route GET /api/posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// @route POST /api/posts
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const post = new Post({ title, content, author });
  await post.save();
  res.status(201).json(post);
});

module.exports = router;
