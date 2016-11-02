app.factory('RedditService', function ($http) {
  return {
    getPosts: function () {
      return $http.get('/api')
    },
    addPost: function(post) {
      return $http.post('/api', post)
    },
    getOne: function(id) {
      return $http.get(`/api/${id}`)
    }
  }

})
