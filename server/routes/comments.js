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

module.exports = router;
