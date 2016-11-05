var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.post('/', function (req, res, next) {
  knex('users')
      .insert(req.body, '*')
      .then( function (user) {
        req.session = user
        console.log('req.session:', req.session);
          res.json(user)
      })
})

module.exports = router;
