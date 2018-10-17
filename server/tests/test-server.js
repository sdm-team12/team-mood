process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../../index');
var HappinessFact = require("../models/happinessFact");

var should = chai.should();
chai.use(chaiHttp);


describe('happiness', function() {

    HappinessFact.collection.drop();

  it('should add a SINGLE happinessFact on /api/happiness POST', function(done) {
    chai.request(server)
      .get('/api/happiness')
      .send({'userID': '1', selfHappiness: '1', teamHappiness: '2'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('teamID');
        res.body[0].should.have.property('selfHappiness');
        res.body[0].should.have.property('teamHappinessteamHappiness');
        res.body[0].userData.selfHappiness.should.equal('1');
        res.body[0].userData.teamHappiness.should.equal('2');
        done();
      });
  });

});