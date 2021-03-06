
app.controller("PostsController", function ($scope, PostService, $cookies, $location) {

    $scope.posts = PostService.posts.query()
    const cookie = $cookies.getObject('loggedIn')

    $scope.sort = "-votes"

    $scope.submitPost = function(post) {
      if (cookie) {
            $scope.post.votes = 0
            $scope.post.users_id = cookie.id
            const newPost = $scope.post
            PostService.posts.save(newPost, function (returnedPost) {
              const newPost = returnedPost[0]
              $scope.posts.push(newPost)
              $scope.post = ''
              $scope.newPost.$setPristine()

            })
      } else {
        $scope.error = 'You must be logged in to create a new post.'
      }
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

    $scope.search = ''

})
