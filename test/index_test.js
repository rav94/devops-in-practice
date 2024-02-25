'use strict';
import { port } from '../config';
import { should as _should, use, request } from 'chai';
import chaiHttp from 'chai-http';
const should = _should();
import server from '../app';

use(chaiHttp);

describe('/GET', () => {
    it('returns the homepage', (done) => {
        request(`http://localhost:${port}`)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Hello SLIIT!!!');
                done();
            });
    });
});
