'use strict';

import faker from 'faker';

const randomNum = faker.random.number({min:1000, max:9999});

module.exports = {
    request_body: {
        'name': 'Supertest Javascript' + randomNum,
        'email': 'Supertest' + randomNum +'@email.com',
        'gender': 'male',
        'status': 'active'
    },
    countOfAPIHit : 5
}