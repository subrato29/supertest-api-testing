'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe('GET', () => {
    it('GET /retrieve all users: ', () => {
        const endpoint = urls.endpoint.users.list_of_all_users;
        return apiUtils.get(request, endpoint).then((response) => {
            const statusCode = response.status;
            if(statusCode === 200) { 
                return expect(response.body.meta.pagination.total).to.be.greaterThan(1000); 
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
       }).catch((err) => {
           return Promise.reject(err);
       });
    });

    it('GET /retrieve all posts: ', () => {
        const endpoint = urls.endpoint.posts.list_of_all_post;
        return apiUtils.get(request, endpoint).then((response) => {
            const statusCode = response.status;
            if(statusCode === 200) {
                return expect(response.body.meta.pagination.total).to.be.greaterThan(1000); 
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
       }).catch((err) => {
           return Promise.reject(err);
       });
    });
})
