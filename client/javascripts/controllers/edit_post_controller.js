app.controller('EditPostController', function ($scope, PostService, $routeParams, $location) {

  const id = $routeParams.id

$scope.editPost = PostService.posts.get({id: $routeParams.id}, function () {})

  $scope.submitEditPost = function (post) {
    PostService.posts.update(post, function () {
      $location.url(`/${id}`)
    })
  }

  $scope.cancelPost = function () {
    $location.url('/')
  }

})
