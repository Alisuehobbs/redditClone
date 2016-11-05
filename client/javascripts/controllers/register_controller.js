app.controller('RegisterController', function ($scope, UserService, $location, $cookies) {

  $scope.submitSignUp = function (newUser) {
    UserService.user.save(newUser, function (returnedobject) {
      $cookies.put('signUpCookie', 'secrectcookie')
    })
    $scope.newUser = {}
    $scope.signUp.$setPristine()
    $location.url('/')

  }

})
