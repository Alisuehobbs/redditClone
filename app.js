'use strict'

var app = angular.module("redditApp", []);
app.controller("redditController", ($scope) => {
  $scope.posts = [{
  title: "Arancini",
  author: "Ali Sue Hobbs",
  imgURL: "http://christinascucina.com/wp-content/uploads/2013/03/IMG_1742.jpg",
  description: "Arancini ([aranˈtʃiːni]; Italian: arancino in singular, Sicilian: arancini or arancine) are stuffed rice balls which are coated with bread crumbs and then deep fried. They are usually filled with ragù (meat and tomato sauce), mozzarella, and peas. A number of regional variants exist which differ in fillings and shape. The name, which is translated as 'little orange', derives from their shape and colour, which is reminiscent of an orange after cooking. Arancini produced in eastern Sicily (especially in Catania) have a more conical shape."
  }]

  $scope.submitPost = function(post) {
    console.log('post:', post);
    event.preventDefault()
    if (post) {
      $scope.posts.push($scope.post)
      console.log('$scope.post:', $scope.post);
      console.log('$scope.posts', $scope.posts);
      $scope.post = ''
      $scope.newPost.$setPristine()
    }
  }

})
