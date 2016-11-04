app.controller('EditCommentController', function ($scope, PostService, $location, $routeParams) {

    var id = $routeParams.id

    $scope.id = ''

    $scope.editedComment = PostService.comments.get({id: $routeParams.id}, function () {})

    $scope.submitEditedComment = function (comment) {
      PostService.comments.update(comment, function () {
        $scope.id = comment.posts_id
        $location.url(`/${postId}`)
      })
    }

    $scope.cancelComment = function () {
      const id = $scope.id
      $location.url(`/${id}`)
    }

})
