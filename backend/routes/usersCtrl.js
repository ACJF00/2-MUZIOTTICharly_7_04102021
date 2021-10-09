// Imports

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');


// Routes
module.exports = {
   register: function(req, res) {
       
    // Paramètres
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const  bio = req.body.bio;
    
    if (email == null || username == null || password == null ) {
        return res.status(400).json({ 'error': 'missing parameters' });
      }

    // TODO regex password/username/mail

    models.User.findOne({
        attributes: ['email'],
        where: { email: email }
      })
    .then(function(userFound) {
        if (!userFound) {

            bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
                const newUser = models.User.create({
                    email: email,
                    username: username,
                    password: bcryptedPassword,
                    bio: bio,
                    isAdmin: 0
                })
                .then(function(newUser) {
                    return res.status(201).json({
                        'userId': newUser.id
                    })
                })
                .catch(function(err) {
                    return res.status(500).json({ 'error': 'Impossible to add user' });
                });
            });
        } else {
            return res.status(409).json({ 'error': 'The user already exists'});
        }
    })


   },
   login: function(req, res) {
       //TODO implement
   }
}