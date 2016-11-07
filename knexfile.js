'use strict';

module.exports = {
        development: {
            client: 'pg',
            connection: 'postgres://localhost/reddit_dev',
            migrations: {
                directory: './server/db/migrations'
            },
            seeds: {
                directory: './server/db/seeds'
            }
        },
        production: {
            client: 'pg',
            connection: process.env.DATABASE_URL,
            migrations: {
                directory: './server/db/migrations'
            },
            seeds: {
                directory: './server/db/seeds'
            }
        };
