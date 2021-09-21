'use strict';

import faker from 'faker';

module.exports = {
    user_id: 'ssk3j6atfblp74jhkkdgyr5dn',
    playlist_id: '6vBRUu7QokVorr8FNAUOjC',
    request_body: {
        post: {
            name: 'Supertest_4',
            description: 'Supertest_4_desc',
            public: true
        },
        put: {
            name: 'UP_Supertest_4',
            description: 'UP_Supertest_4_desc',
            public: true
        },
        post_faker: {
            name: 'Supertest_' + faker.random.number({min:1000, max:9999}),
            description: 'Supertest_' + faker.random.number({min:1000, max:9999}) + '_desc',
            public: true
        },
        post_tracks: [
            '73y649QhnXdcm6fRdvfraO', 
            '4iV5W9uYEdYUVa79Axb7Rh'
        ]
    },
    playlist_id_to_update: '2NaS6XqrzLtEC7dC0uieRl',
    search: {
        search_for_an_artist: {
            q: 'Muse',
            type: 'track,artist'
        }
    }
}