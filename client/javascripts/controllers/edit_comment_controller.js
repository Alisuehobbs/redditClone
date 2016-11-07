app.controller('EditCommentController', function ($scope, PostService, $location, $routeParams, $cookies) {

    var id = $routeParams.id

    $scope.id = ''

    const cookie = $cookies.getObject('loggedIn')

    $scope.editedComment = PostService.comments.get({id: $routeParams.id}, function () {})

    $scope.submitEditedComment = function (comment) {
      if (!cookie) {
        $scope.error = 'Only the user that created this comment can edit it. If you created this comment, please log in. Otherwise, click cancel to return to the main page.'
      } else if (comment.users_id === cookie.id) {
        PostService.comments.update(comment, function () {
          $scope.id = comment.posts_id
          $location.url(`/${$scope.id}`)
        })
      } else {
        $scope.error = 'Only the user that created this comment can edit it. If you created this comment, please log in. Otherwise, click cancel to return to the main page.'
      }
    }

    $scope.cancelComment = function () {
      $location.url(`/`)
    }

})
