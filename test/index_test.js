'use strict';
const config = require('../config.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the homepage', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Hello SLIIT!!!');
                done();
            });
    });
});