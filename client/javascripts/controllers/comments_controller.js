app.controller('CommentsController', function($scope, RedditService, $routeParams) {

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
          console.log('$scope.comments:', $scope.comments);
        })

    $scope.submitComment = function (comment) {
        $scope.comment.posts_id = $scope.post.id
        RedditService.postComment(comment)
            .then( function (comment) {
                $scope.comments.push(comment.data[0])
            })

    }
})
