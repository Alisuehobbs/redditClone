app.controller('CommentsController', function($scope, RedditService, $routeParams, $location) {

    const id = $routeParams.id

    $scope.post = {}

    RedditService.getOne(id)
        .then(function(post) {
            $scope.post = post.data
        })

    $scope.comments = []

    RedditService.getComments(id)
        .then(function(comments) {
          if (comments.data.length === 1) {
              $scope.comments.push(comments.data[0])
          } else {
            $scope.comments = comments.data
          }
         })

    $scope.submitComment = function (comment) {
        $scope.comment.posts_id = $scope.post.id
        RedditService.postComment(comment)
            .then( function (comment) {
                $scope.comments.push(comment.data[0])
                $scope.comment = {}
                $scope.newComment.$setPristine()
            })

    }

    $scope.delete = function (post) {
        RedditService.deletePost(post.id)
            .then( function () {
                $location.url('/')
            })
    }

    $scope.deleteComment = function (comment) {
      var id = comment.id
      RedditService.deleteCommentFunction(id)
          .then( function() {
            const index = $scope.comments.indexOf(`comment`)
            $scope.comments.splice(index, 1)
          })
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
      RedditService.changeVote(post)
          .then( function () {
          })

    }

    $scope.subtractvote = function(post) {
      post.votes -= 1
      RedditService.changeVote(post)
          .then( function() {
          })
    }
})
