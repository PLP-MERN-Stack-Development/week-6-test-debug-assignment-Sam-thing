// server/src/app.js
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes); // mount your post routes

module.exports = app;
