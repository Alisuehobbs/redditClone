var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/', function(req, res, next) {
    knex('posts')
        .then( function(data) {
            res.json(data)
        })
});

router.post('/', function(req, res, next) {
    knex('posts')
        .insert(req.body, '*')
        .then( function(post) {
            res.json(post)
        })
})

router.get('/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .first()
        .then( function (post) {
            res.json(post)
        })
})

router.put('/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .first()
        .then (function (post) {
          if (post.users_id === req.body.users_id) {
            knex('posts')
              .where('id', req.params.id)
              .update(req.body)
              .then( function (post) {
                res.json(post)
              })
            } else {
              const error = {
                message: 'Only the user that created this post can edit it. If you created this post, please log in.'
              }
              res.json(error)
            }
          })
})

router.delete('/:id', function(req, res, next) {
    knex('posts')
        .where('id', req.params.id)
        .first()
        .del()
        .then( function() {
          res.json('Delete Success!')
        })
})

module.exports = router;
