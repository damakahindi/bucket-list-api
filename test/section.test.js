/* eslint-disable no-undef, no-underscore-dangle */
const app = require('../index.js');
const request = require('supertest')(app);
const { expect } = require('chai');

describe('SECTION', () => {
  let userId;
  let sectionId;
  before((done) => {
    request
      .post('/api/user')
      .send({
        googleId: 'esther.dama@gmail.com',
      })
      .end((err, res) => {
        userId = res.body._id;
        done();
      });
  });
  describe('CRUD Section Operations', () => {
    describe('CREATE', () => {
      it('should POST buckets to api/section', (done) => {
        request
          .post('/api/section/')
          .send({
            googleId: userId,
            title: 'Travel',
            description: 'Travel and see the world',
          })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId', 'title', 'description');
            expect(res.body.title).to.be.a('string');
            expect(res.body.title).to.eql('Travel');
            sectionId = res.body._id;
            done();
          });
      });

      it('should not POST to /api/section without a title', (done) => {
        request
          .post('/api/section')
          .send({
            googleId: userId,
            description: 'Travel to Egypt and see the pyramids',
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('error');
            expect(res.body).to.have.property('error');
            expect(res.body.error).to.eql('title required');
            done();
          });
      });

      it('should not POST to /api/section without a googleId', (done) => {
        request
          .post('/api/section')
          .send({
            title: 'Travel',
            sectionId,
            description: 'Travel to Egypt and see the pyramids',
          })
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
    describe('READ', () => {
      it('should GET ONE Section from /api/section', (done) => {
        request
          .get(`/api/section/${sectionId}`)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId', 'title', 'description', 'createdAt');
            done();
          });
      });
      it('should GET ONE Section from with a non existent id_ /api/section/', (done) => {
        request
          .get('/api/section/57daf1ae48324f06fb4cafd6')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.be.a('object');
            expect(res.body).to.be.empty;
            done();
          });
      });
      it('should GET ALL Sections by the user defined from api/user/:id/section', (done) => {
        request
          .get(`/api/user/${userId}/section/`)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.exist;
            expect(res.body).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body[0]).to.include.keys('_id', 'googleId', 'title', 'description');
            done();
          });
      });
    });
    describe('UPDATE', () => {
      it('should PUT the title to /api/section', (done) => {
        request
          .put(`/api/section/${sectionId}`)
          .send({
            title: 'New Things',
          })
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.exist;
            expect(res.body).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId', 'title', 'description');
            expect(res.body.title).to.be.a('string');
            expect(res.body.title).to.eql('New Things');
            done();
          });
      });
      it('should PUT the content to /api/section', (done) => {
        request
          .put(`/api/section/${sectionId}`)
          .send({
            description: 'New Description Things',
          })
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('_id', 'googleId', 'title', 'description');
            expect(res.body.description).to.be.a('string');
            expect(res.body.description).to.eql('New Description Things');
            done();
          });
      });

      it('should not PUT to /api/section with invalid id', (done) => {
        request
          .put('/api/section/bogusThings')
          .send({
            title: 'New Things',
          })
          .expect('Content-Type', /json/)
          .end((err, res) => {
            expect(res.status).to.exist;
            expect(res.body).to.exist;
            expect(res.status).to.equal(500);
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('kind', 'message', 'name', 'path');
            done();
          });
      });
    });
    describe('DELETE', () => {
      it('should DELETE using /api/section', (done) => {
        request
          .delete(`/api/section/${sectionId}`)
          .end((err, res) => {
            expect(res.status).to.exist;
            expect(res.body).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            done();
          });
      });
      it('should not DELETE using /api/section with invalid ID', (done) => {
        request
          .delete('/api/section/dhalHENflhMQDQQ1111')
          .end((err, res) => {
            expect(res.status).to.exist;
            expect(res.body).to.exist;
            expect(res.status).to.equal(500);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('kind');
            done();
          });
      });
    });
  });
});
