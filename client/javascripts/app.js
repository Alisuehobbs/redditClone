
var app = angular.module("redditApp", ['ngAnimate', 'ngRoute', 'ngResource']);

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
        .when('/edit_post/:id', {
            templateUrl: '../views/edit_post.html',
            controller: 'EditPostController'
        })
        .when('/edit_comment/:id', {
            templateUrl: '../views/edit_comment.html',
            controller: 'EditCommentController'
        })
        .when('/signin', {
            templateUrl: '../views/signin.html',
            controller: 'RegisterController'
        })
})
