/* eslint-disable no-undef, no-underscore-dangle */
const app = require('../index.js');
const request = require('supertest')(app);
const { expect } = require('chai');

describe('USER', () => {
  describe('Create USER Operations', () => {
    describe('CREATE', () => {
      it('should POST user to api/user', (done) => {
        request
          .post('/api/user/')
          .send({
            googleId: 'esther.kahindi@gmail.com',
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId');
            expect(res.body.googleId).to.be.a('string');
            userId = res.body._id;
            done();
          });
      });

      it('should POST user an existing user to api/user will rreturn the user that already exists', (done) => {
        request
          .post('/api/user/')
          .send({
            googleId: 'esther.kahindi@gmail.com',
          })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId');
            expect(res.body.googleId).to.be.a('string');
            done();
          });
      });

      it('should not POST to /api/user without a googleId', (done) => {
        request
          .post('/api/user')
          .send({})
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('error');
            expect(res.body).to.have.property('error');
            expect(res.body.error).to.eql('googleId required');
            done();
          });
      });
    });
  });
});
