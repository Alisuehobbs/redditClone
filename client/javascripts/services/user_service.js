app.service("UserService", function($resource) {
    return {
      user: $resource('users/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      })
  }
})
