var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/:id', function (req, res, next) {
    knex('comments')
        .where('posts_id', req.params.id)
        .then( function (comment) {
            res.json(comment)
        })
})

router.post('/', function (req, res, next) {
    knex('comments')
        .insert(req.body, '*')
        .then( function (comment) {
            res.json(comment)
        })
})

router.get('/one/:id', function (req, res, next) {
    knex('comments')
        .where('id', req.params.id)
        .first()
        .then( function (comment) {
            res.json(comment)
        })
})

router.put('/:id', function (req, res, next) {
  console.log('made it to api');
  console.log('req.params.id:', req.params.id);
  console.log('req.body:', req.body);
    knex('comments')
        .where('id', req.params.id)
        .update(req.body)
        .then( function (comment) {
          res.json(comment)
        })
})

module.exports = router;
