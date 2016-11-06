var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


router.post('/', function(req, res, next) {
    knex('users')
        .where('username', req.body.username)
        .first()
        .then(function(user) {
            if (user) {
                console.log('user:', user);
                const passwordMatch = bcrypt.compareSync(req.body.password, user.password)
                if (passwordMatch === true) {
                  console.log('made it to correct password');
                    res.json(user)
                } else {
                  console.log('made it to incorrect password');
                const error = {
                    message: 'Incorrect username or password'
                }
                res.json(error)
              }
            } else {
                const error = {
                    message: 'Username does not exist'
                }
                res.json(error)
            }
        })
})

module.exports = router
