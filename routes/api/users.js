const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require(jsonwebtoken);
const passport = require('passport');
const User = require('../../model/User');

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 **/
router.post('/register', (req, res) => {
    let { 
            name, 
            username,
            email, 
            password, 
            confirm_password 
        } = req.body
    if(password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }

    // CHECK FOR THE UNIQUE USERNAME
    User.findOne({
        username: username
    }).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Username is already taken"
            });
        }
    });

    // CHECK FOR THE UNIQUE EMAIL
    User.findOne({
        email: email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forget your password"
            });
        }
    });

    // THE DATA IS VALID AND NEW WE CAN REGISTER THE USER
    let newUser = new User({
        name,
        username,
        password,
        email
    });

    // HASH THE PASSWORD
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Hurray!!! User is now registered"
                });
            });
        });
    });
}); 

module.exports = router;