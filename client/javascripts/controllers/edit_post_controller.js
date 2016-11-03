app.controller('EditPostController', function ($scope, RedditService, $routeParams, $location) {

  const id = $routeParams.id

  $scope.editPost = {}

  RedditService.getOne(id)
    .then( function(postToEdit) {
      $scope.editPost = postToEdit.data
    })

  $scope.submitEditPost = function (post) {
    RedditService.putPost(post)
        .then( function() {
          $location.url(`/${id}`)
        })

  }

  $scope.cancelPost = function () {
    $location.url('/')
  }

})
