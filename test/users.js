'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe ('Users', () => {
    let createId = '';
    it ('GET /retrieve all users: ', () => {
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

    it ('POST /create user: ', () => {
        const endpoint = urls.endpoint.users.list_of_all_users;
        const request_body = data.request_body;
        return apiUtils.post(request, endpoint, request_body).then((response) => {
             const statusCode = response.status;
            if (statusCode === 201) {
                createId = response.body.data.id;
                const expectedEmail = data.request_body.email;
                return expect(expectedEmail).to.be.equal(response.body.data.email);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it ('GET /retrieve specific user: ', () => {
        let endpoint = urls.endpoint.users.list_of_all_users;
        endpoint += '/' + createId;
        return apiUtils.get(request, endpoint).then((response) => {
            const statusCode = response.status;
            if(statusCode === 200) { 
                return expect(createId).to.be.equal(response.body.data.id); 
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
       }).catch((err) => {
           return Promise.reject(err);
       });
    });
})
