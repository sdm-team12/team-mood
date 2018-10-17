var request = require('supertest');
var app = require('../../index');
var expect = require('chai').expect;

describe('Login API', function() {
  it('Test Login success if credential is valid', function(done) {
    request(app)
     .post('/auth')
         .send({email: 'rohit_dang2006@yahoo.com', password: '19934343'})
         .set('Accept', 'application/json')
         .set('Content-Type', 'application/x-www-form-urlencoded')
         .expect(function(response) {
            expect(response).not.to.be.empty;
         })
         .end(done);
  });
});

after(() => {
  app.stop();
})