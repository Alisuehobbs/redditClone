app.factory('RedditService', function ($http, $resource) {
  return {
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
    },
    getOneComment: function(id) {
      return $http.get(`/comments/one/${id}`)
    },
    putComment: function(comment) {
      const id = comment.id
      return $http.put(`/comments/${id}`, comment)
    },
    deleteCommentFunction: function (id) {
      return $http.delete(`/comments/${id}`)
    }
  }

})
