var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/bypost/:id', function (req, res, next) {
  console.log('made it to the correct get');
    knex('comments')
        .where('posts_id', req.params.id)
        .then( function (comment) {
          console.log('comment in api:', comment);
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

router.get('/:id', function (req, res, next) {
    knex('comments')
        .where('id', req.params.id)
        .first()
        .then( function (comment) {
            res.json(comment)
        })
})

router.put('/:id', function (req, res, next) {
    knex('comments')
        .where('id', req.params.id)
        .update(req.body)
        .then( function (comment) {
          res.json(comment)
        })
})

router.delete('/:id', function (req, res, next) {
    knex('comments')
        .where('id', req.params.id)
        .first()
        .del()
        .then( function (comment) {
          res.json(comment)
        })
})

module.exports = router;
