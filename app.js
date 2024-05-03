const express = require('express');
const app = express();
const restaurantesRoutes = require('./routes/restaurantes');

app.use(express.json());

app.use('/restaurantes', restaurantesRoutes);

module.exports = app;
