require('dotenv').config();
const express = require('express');
const app = express();
require('./modeles/dbConfig');
const postsRoutes = require('./routes/postController');

app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('server startet 5500'));
