exports.seed = function(knex, Promise) {

    return knex('comments').del()
        .then(function() {
            return Promise.all([

                knex('comments').insert({
                  posts_id: 1,
                  author: "Bob",
                  content: "Yummy! Can't wait to cook this!"
                }),

                knex('comments').insert({
                  posts_id: 2,
                  author: "Bill",
                  content: "Don't forget about the pits!"
                }),

                knex('comments').insert({
                  posts_id: 3,
                  author: "Joe",
                  content: "You can add shrimp for protein!"
                })

            ]);
        });
};
