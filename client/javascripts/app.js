'use strict'

const app = angular.module("redditApp", ['ngAnimate']);
app.controller("redditController", ($scope) => {
    $scope.sort = "-votes"

    $scope.posts = [{

        comments: [{
            author: "Bob",
            content: "Yummy! Can't wait to cook this!"
        }]
    }, {

        comments: []
    }, {

        comments: []
    }]

    $scope.votes = function(post) {
      if (post.votes > 0) {
        return 'positive';
      } else if (post.votes < 0) {
        return 'negative';
      } else {
        return 'neutral';
      }
    }

    $scope.submitPost = function(post) {
        event.preventDefault()
        if (post) {
            $scope.post.prettyDate = moment().calendar()
            $scope.post.date = new Date()
            console.log('$scope.post.date:', $scope.post.date);
            $scope.post.comments = []
            $scope.post.votes = 0
            $scope.posts.push($scope.post)
            $scope.post = ''
            $scope.newPost.$setPristine()
        }
    }

    $scope.addvote = function(post) {
        post.votes += 1
    }

    $scope.subtractvote = function(post) {
        post.votes -= 1
    }

    $scope.comment = {}

    $scope.submitComment = function(post, comment, index, newComment) {
        event.preventDefault()
        if (comment) {
            post.comments.push(comment)
            $scope.comment[index] = null
            newComment.$setPristine()
        }
    }

    $scope.search = ''
})
