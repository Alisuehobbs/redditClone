exports.seed = function(knex, Promise) {

    return knex('users').del()
        .then(function() {
            return Promise.all([

                knex('users').insert({
                  username: 'alihobbs',
                  password: 'test1234'
                }),

                knex('users').insert({
                  username: 'p.wademenely',
                  password: 'test1234'
                }),

                knex('users').insert({
                  username: 'floydo',
                  password: 'test1234'
                })

            ]);
        });
};
