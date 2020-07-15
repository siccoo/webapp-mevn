const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// INITIALIZE THE APP
const app = express();

// MIDDLEWARES
// FORM DATA MIDDLEWARES
app.use(bodyParser.urlencoded({
    extended: false
}));

// JSON BODY MIDDLEWARE
app.use(bodyParser.json());

// CORS MIDDLEWARE
app.use(cors());

// SET UP OF THE STATIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));