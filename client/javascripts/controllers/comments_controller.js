app.controller('CommentsController', function($scope, RedditService, $routeParams) {

    const id = $routeParams.id

    $scope.post = {}

    RedditService.getOne(id)
        .then(function(post) {
            $scope.post = post.data
        })

    $scope.comments = []

    RedditService.getComments(id)
        .then(function(comments) {
            const commentsList = comments.data[0]
            $scope.comments.push(commentsList)
            console.log('$scope.comments:', $scope.comments);
        })

})
