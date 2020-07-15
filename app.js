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

// BRING IN DATABASE CONFIG / CONNECT TO DATABSE
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch( err => {
    console.log(`Unable to connect with the database ${err}`)    
});