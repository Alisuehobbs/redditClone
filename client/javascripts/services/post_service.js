app.service("PostService", function($resource) {
    return {
      posts: $resource('posts/:id', {id: '@id'}, {
        'update': {
          method: 'PUT'
        },
        'get':  {
          method:'GET',
          isArray:false
        },
        'save': {
          method: 'POST',
          isArray:true
        }
      }),
    comments: $resource('comments/:id', {id: '@id'}, {
      'update': {
        method: 'PUT'
      },
      'get':  {
        method:'GET',
        isArray:false
      },
      'save': {
        method: 'POST',
        isArray:true
      }
    }),
    oneComment: $resource('comments/bypost/:id', {id: '@id'}, {
      'get': {
        method: 'GET',
        isArray: true
      }
    })
  }
})
