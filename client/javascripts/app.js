
var app = angular.module("redditApp", ['ngAnimate', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/posts.html',
            controller: 'PostsController'
        })
        .when('/:id', {
            templateUrl: '../views/comments.html',
            controller: 'CommentsController'
        })
})
