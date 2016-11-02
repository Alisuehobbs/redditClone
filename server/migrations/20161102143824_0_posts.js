'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.string('imgURL').notNullable();
        table.string('description', 2000).notNullable();
        table.string('prettyDate').notNullable();
        table.integer('votes').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
}
