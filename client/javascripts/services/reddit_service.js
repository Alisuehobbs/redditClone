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
    },
    postComment: function(comment) {
      return $http.post('/comments', comment)
    },
    putPost: function(post) {
      const id = post.id
      return $http.put(`/posts/${id}`, post)
    },
    deletePost: function(id) {
      return $http.delete(`/posts/${id}`)
    }
  }

})
