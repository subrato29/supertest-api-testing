import supertest from 'supertest';
const urls = require('../config/urls.js');
const request = supertest(urls.baseUrl);

export default request;