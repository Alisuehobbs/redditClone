app.service("CommentService", function($resource, $http) {
    return $resource('comments/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
          },
        'get':  {
            method:'GET',
            isArray:true
          }
    })
    return $resource('posts/:id', {id: '@id'}, {
      'get':  {
          method:'GET',
          isArray:true
        }
    })
})
