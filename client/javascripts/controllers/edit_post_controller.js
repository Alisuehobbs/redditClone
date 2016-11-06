app.controller('EditPostController', function ($scope, PostService, $routeParams, $location, $cookies) {

  const id = $routeParams.id

  const cookie = $cookies.getObject('loggedIn')

  $scope.editPost = PostService.posts.get({id: $routeParams.id}, function () {})

  $scope.submitEditPost = function (post) {
    if (post.users_id !== cookie.id) {
      $scope.error = 'Only the user that created this post can edit it. If you created this post, please log in. Otherwise, click cancel to return to the post.'
    } else {
    PostService.posts.update(post, function (returnedPost) {
      $location.url(`/${id}`)
    })
    }
  }

  $scope.cancelPost = function () {
    $location.url(`/${id}`)
  }

})
