'use strict';

require('dotenv').config();

const commonUtils = require('../lib/commonUtils.js')
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const { expect } = require('chai');

var apiUtils = {
    /**
     * @function
     * @name get
     * @param {supertest} request 
     * @param {string} endpoint 
     */
    get: function(request, endpoint) {
      return new Promise((resolve, reject) => {
        request
          .get(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
        });       
      });
    },

    /**
     * @function
     * @name post
     * @param {supertest} request 
     * @param {string} endpoint 
     * @param {json} request_body 
     */
    post: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .post(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .set('Accept', 'application/json')
          .send(request_body)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('post request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
         });
      });
    },

    /**
     * @function
     * @name put
     * @param {supertest} request 
     * @param {string} endpoint 
     * @param {json} request_body 
     */
    put: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .put(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .set('Accept', 'application/json')
          .send(request_body)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('put request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
         });
      });
    },

    /**
     * @function
     * @name delete
     * @param {supertest} request 
     * @param {string} endpoint 
     * @param {json} request_body 
     */
    delete: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .delete(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .send(request_body)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
        });       
      });
    },

    /**
     * @function
     * @name search
     * @param {supertest} request 
     * @param {string} endpoint 
     * @param {string} q
     * @param {string} type 
     */
    search: function(request, endpoint, q, type) {
      return new Promise((resolve, reject) => {
        request
          .get(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .query({ 'q': q })
          .query({ 'type': type })
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
        });       
      });
    }
}

module.exports = apiUtils;