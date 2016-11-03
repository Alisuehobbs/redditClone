app.controller('EditCommentController', function ($scope, RedditService, $location, $routeParams) {

    const postId = $routeParams.id

    $scope.editComment = {}

    $scope.id = ''

    RedditService.getOneComment(postId)
      .then( function (comment) {
          $scope.editedComment = comment.data
          $scope.id = comment.data.posts_id
      })

    $scope.submitEditedComment = function (comment) {
      const id = comment.posts_id
      RedditService.putComment(comment)
          .then( function () {
            $location.url(`/${id}`)
          })
    }

    $scope.cancelComment = function () {
      const id = $scope.id
      $location.url(`/${id}`)
    }

})
