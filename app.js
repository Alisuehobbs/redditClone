'use strict'

const app = angular.module("redditApp", ['ngAnimate']);
app.controller("redditController", ($scope) => {
    $scope.sort = "-votes"

    $scope.posts = [{
        id: 1,
        title: "Arancini",
        author: "Ali Sue Hobbs",
        imgURL: "http://christinascucina.com/wp-content/uploads/2013/03/IMG_1742.jpg",
        description: "Arancini ([aranˈtʃiːni]; Italian: arancino in singular, Sicilian: arancini or arancine) are stuffed rice balls which are coated with bread crumbs and then deep fried. They are usually filled with ragù (meat and tomato sauce), mozzarella, and peas. A number of regional variants exist which differ in fillings and shape. The name, which is translated as 'little orange', derives from their shape and colour, which is reminiscent of an orange after cooking. Arancini produced in eastern Sicily (especially in Catania) have a more conical shape.",
        prettyDate: moment().subtract(3, 'days').calendar(),
        date: new Date('Sun Oct 23 2016 11:56:13 GMT-0600 (MDT)'),
        votes: 5,
        comments: [{
            author: "Bob",
            content: "Yummy! Can't wait to cook this!"
        }]
    }, {
        id: 2,
        title: "Bacon Wrapped Dates",
        author: "Ali Sue Hobbs",
        imgURL: "http://dh3k79jmajxjl.cloudfront.net/wp-content/uploads/2014/11/19223940/Plate.jpg",
        description: "Directions. Special equipment: 35 to 40 toothpicks. Preheat the oven to 425 degrees F. Stuff each date with 1 to 2 almonds. Wrap each date with half a piece of bacon and secure with a toothpick. Bake, turning the dates halfway through so the bacon is evenly cooked, 15 to 18 minutes. Serve warm or at room temperature.",
        prettyDate: moment().subtract(2, 'days').calendar(),
        date: new Date('Mon Oct 24 2016 11:56:13 GMT-0600 (MDT)'),
        votes: 1,
        comments: []
    }, {
        id: 3,
        title: "Vietnamese Spring Rolls",
        author: "Ali Sue Hobbs",
        imgURL: "http://www.girlmakesfood.com/wp-content/uploads/2012/08/Vegan-Spring-Rolls.jpg",
        description: "Gỏi cuốn. Gỏi cuốn, Vietnamese spring roll, is a Vietnamese dish traditionally consisting of pork, prawn, vegetables, bún (rice vermicelli), and other ingredients wrapped in Vietnamese bánh tráng (commonly known as rice paper).",
        prettyDate: moment().subtract(1, 'days').calendar(),
        date: new Date('Tue Oct 25 2016 11:56:13 GMT-0600 (MDT)'),
        votes: -1,
        comments: []
    }]

    $scope.votes = function(post) {
      if (post.votes > 0) {
        return 'positive';
      } else if (post.votes < 0) {
        return 'negative';
      } else {
        return 'neutral';
      }
    }

    $scope.submitPost = function(post) {
        event.preventDefault()
        if (post) {
            $scope.post.prettyDate = moment().calendar()
            $scope.post.date = new Date()
            console.log('$scope.post.date:', $scope.post.date);
            $scope.post.comments = []
            $scope.post.votes = 0
            $scope.posts.push($scope.post)
            $scope.post = ''
            $scope.newPost.$setPristine()
        }
    }

    $scope.addvote = function(post) {
        post.votes += 1
    }

    $scope.subtractvote = function(post) {
        post.votes -= 1
    }

    $scope.comment = {}

    $scope.submitComment = function(post, comment, index, newComment) {
        event.preventDefault()
        if (comment) {
            post.comments.push(comment)
            $scope.comment[index] = null
            newComment.$setPristine()
        }
    }

    $scope.search = ''
})
