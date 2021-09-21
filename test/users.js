'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe ('Users', () => {
    let createId = '';
    let response_body_of_specific_user = '';
    let endpoint_of_specific_user = '';
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
        endpoint_of_specific_user = endpoint + '/' + createId;
        return apiUtils.get(request, endpoint_of_specific_user).then((response) => {
            const statusCode = response.status;
            if(statusCode === 200) {
                response_body_of_specific_user = response.body.data; 
                return expect(createId).to.be.equal(response.body.data.id); 
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
       }).catch((err) => {
           return Promise.reject(err);
       });
    });

    it ('PUT /update user: ', () => {
        const request_body = {
            'name': response_body_of_specific_user.name + '_Updated',
            'email': response_body_of_specific_user.email,
            'gender': response_body_of_specific_user.gender,
            'status': response_body_of_specific_user.status
        }
        return apiUtils.put(request, endpoint_of_specific_user, request_body).then((response) => {
             const statusCode = response.status;
            if (statusCode === 200) {
                const expectedName= request_body.name;
                return expect(expectedName).to.be.equal(response.body.data.name);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        });
    });
})
