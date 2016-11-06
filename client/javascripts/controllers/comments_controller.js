app.controller('CommentsController', function($scope, PostService, $routeParams, $location, $cookies) {


  $scope.post = PostService.posts.get({id: $routeParams.id}, function (thing) {
    console.log('thing:', thing);
    $scope.comment.users_id = $cookies.get('signUpCookie')
    console.log('$scope.comment.users_id:', $scope.comment.users_id);
  })

  PostService.oneComment.get({id: $routeParams.id}, function (comments) {
      $scope.comments = comments
  })


  $scope.submitComment = function (comment) {
        $scope.comment.posts_id = $scope.post.id
        PostService.comments.save(comment, function (returnedComment) {
            const newComment = returnedComment[0]
            $scope.comments.push(newComment)
            $scope.comment = {}
            $scope.newComment.$setPristine()
        })
    }

    $scope.delete = function (post) {
      PostService.posts.delete(post, function () {
        $location.url('/')
      })
    }

    $scope.deleteComment = function (comment) {
      PostService.comments.delete(comment, function () {
        const index = $scope.comments.indexOf(comment)
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
      PostService.posts.update(post, function () {})
    }

    $scope.subtractvote = function(post) {
      post.votes -= 1
      PostService.posts.update(post, function() {})
    }
})
