app.service("PostService", function($resource) {
    return $resource('posts/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
            }
    })
})
