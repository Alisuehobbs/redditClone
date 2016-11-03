app.controller('EditCommentController', function ($scope, RedditService, $location, $routeParams) {

    var id = $routeParams.id

    $scope.editComment = {}

    RedditService.getOneComment(id)
      .then( function (comment) {
          $scope.editedComment = comment.data
      })

    $scope.submitEditedComment = function (comment) {
      console.log('comment:', comment);
      var id = comment.posts_id
      RedditService.putComment(comment)
          .then( function () {
            $location.url(`/${id}`)
          })
    }

})
