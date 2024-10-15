const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

connection.once('open', () => {
  console.log('MongoDB connection established.');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
