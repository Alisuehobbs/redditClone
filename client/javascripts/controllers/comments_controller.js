app.controller('CommentsController', function ($scope, RedditService, $routeParams) {

  const id = $routeParams.id

  $scope.post = {}

  RedditService.getOne(id)
      .then( function (post) {
          $scope.post = post.data
      })
})
