app.factory('RedditService', function ($http) {
  return {
    getPosts: function () {
      return $http.get('/posts')
    },
    addPost: function(post) {
      return $http.post('/posts', post)
    },
    getOne: function(id) {
      return $http.get(`/posts/${id}`)
    },
    getComments: function(id) {
      return $http.get(`/comments/${id}`)
    }
  }

})
