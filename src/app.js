require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({ 'extended' : false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// routes
app.use('/api', require('./routes/index.routes'));

module.exports = app;