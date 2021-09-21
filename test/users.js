'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');
const commonUtils = require('../lib/commonUtils.js');

describe('Users', () => {

    it('GET /retrieve all users: ', () => {
        const endpoint = urls.endpoint.users.list_of_all_users;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
            if(statusCode === 200) { 
                console.log(response.body.meta.pagination.total);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
       }).catch((err) => {
           return Promise.reject(err);
       });
    });
})
