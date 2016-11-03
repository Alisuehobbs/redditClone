
app.controller("PostsController", function ($scope, RedditService) {

    $scope.posts = []

    RedditService.getPosts()
        .then( function(posts) {
          $scope.posts = posts.data
        })

    $scope.sort = "-votes"

    $scope.submitPost = function(post) {
        if (post) {
            RedditService.addPost($scope.post)
                .then( function(post) {
                  $scope.posts.push(post.data[0])
                  $scope.post = ''
                  $scope.newPost.$setPristine()
                })
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
    //
    // $scope.addvote = function(post) {
    //     post.votes += 1
    // }
    //
    // $scope.subtractvote = function(post) {
    //     post.votes -= 1
    // }

    $scope.search = ''
})
