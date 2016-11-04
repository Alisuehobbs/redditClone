
app.controller("PostsController", function ($scope, PostService) {

    $scope.posts = PostService.posts.query()

    $scope.sort = "-votes"

    $scope.submitPost = function(post) {
        if (post) {
            $scope.post.votes = 0
            const newPost = $scope.post
            PostService.posts.save(newPost, function () {})
            $scope.posts.push(newPost)
            $scope.post = ''
            $scope.newPost.$setPristine()
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
