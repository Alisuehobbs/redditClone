app.controller('RegisterController', function($scope, UserService, $location, $cookies) {

    $scope.submitSignUp = function(newUser) {
        UserService.user.save(newUser, function(returnedobject) {
            const user = returnedobject[0]
            if (user.length === undefined) {
                $cookies.putObject('signUpCookie', user)
                $scope.newUser = {}
                $scope.signUp.$setPristine()
                $location.url('/')
            } else if (user.length !== 0) {
              $scope.error = user
            }
        })

    }

})
