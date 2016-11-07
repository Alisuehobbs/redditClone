app.controller('CommentsController', function($scope, PostService, $routeParams, $location, $cookies) {


    $scope.post = PostService.posts.get({
        id: $routeParams.id
    }, function(thing) {})

    const cookie = $cookies.getObject('loggedIn')

    PostService.oneComment.get({
        id: $routeParams.id
    }, function(comments) {
        $scope.comments = comments
    })


    $scope.submitComment = function(comment) {
      if (!cookie) {
        $scope.error = 'You must be logged in to comment'
      } else {
        $scope.comment.posts_id = $scope.post.id
        $scope.comment.users_id = cookie.id
        PostService.comments.save(comment, function(returnedComment) {
          const newComment = returnedComment[0]
          $scope.comments.push(newComment)
          $scope.comment = {}
          $scope.newComment.$setPristine()
        })
      }
    }

    $scope.delete = function(post) {
        if (!cookie) {
            $scope.error = 'Only the user that created this post can delete it. If you created this post, please log in.'
        } else if (post.users_id === cookie.id) {
            PostService.posts.delete(post, function() {
                $location.url('/')
            })
        } else {
            $scope.error = 'Only the user that created this post can delete it. If you created this post, please log in.'
        }
    }

    $scope.deleteComment = function(comment) {
      if (!cookie) {
            $scope.error = 'Only the user that created this comment can delete it. If you created this comment, please log in.'
      } else if (comment.users_id === cookie.id) {
            PostService.comments.delete(comment, function() {
                const index = $scope.comments.indexOf(comment)
                $scope.comments.splice(index, 1)
            })
        } else {
            $scope.error = 'Only the user that created this comment can delete it. If you created this comment, please log in.'
        }
    }

    $scope.votes = function(post) {
        if (post.votes > 0) {
            return 'positive';
        } else if (post.votes < 0) {
            return 'negative';
        } else {
            return 'neutral';
        }
    }

    $scope.addvote = function(post) {
        post.votes += 1
        PostService.posts.update(post, function() {})
    }

    $scope.subtractvote = function(post) {
        post.votes -= 1
        PostService.posts.update(post, function() {})
    }
})
