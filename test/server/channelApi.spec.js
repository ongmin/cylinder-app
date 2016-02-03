/* global describe it */

import app from '../../server/app'
import { expect } from 'chai'
import request from 'supertest'
import slug from 'slug'

const NOT_FOUND = 404
const OK = 200

let testChannel = {
  name: 'Adele Playlist',
  owner: ['adele'],
  viewers: ['min', 'bert'],
  playlist: ['hello', 'rolling in the deep']
}

describe('/GET /channels', function () {
  this.timeout(10000)
  it('should respond with an array of channels', done => {
    request(app).get('/channels')
      .expect('Content-Type', /json/)
      .expect(OK)
      .expect(res => {
        expect(res.body).to.be.an('array')
      })
      .end(done)
  })
})

describe('/POST /channels', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  it('should create a new channel and respond with the object', done => {
    agent.post('/channels').send(testChannel)
      .expect('Content-Type', /json/)
      .expect(201)
      .expect(res => {
        for (const prop in testChannel) {
          expect(res.body[prop]).to.eql(testChannel[prop])
        }
        expect(res.body.slug).to.equal(slug(testChannel.name).toLowerCase())
      })
      .end(done)
  })
  it('should add new channel to the database', done => {
    agent.get('/channels')
      .expect(res => {
        const newChannel = res.body.find(channel => channel.slug === slug(testChannel.name).toLowerCase())
        expect(newChannel).to.exist
        for (const prop in testChannel) {
          expect(newChannel[prop]).to.eql(testChannel[prop])
        }
      })
      .end(done)
  })
})

describe('/GET /channels/:slug', function () {
  this.timeout(10000)
  it('should respond with the channel with the respective slug', done => {
    request(app).get('/channels')
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.have.length.above(0)
        for (const prop in testChannel) {
          expect(res.body[0][prop]).to.eql(testChannel[prop])
        }
      })
      .end(done)
  })
  it('should respond with NOT_FOUND if channel slug is not found', done => {
    request(app).get('/channels/N0nEx1sTenTs1ug')
      .expect(NOT_FOUND)
      .end(done)
  })
})

describe('/PUT /channels', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  testChannel.viewers.push('seb')
  testChannel.playlist.push('some song')
  it('should return the updated channel', done => {
    agent.put('/channels')
      .send(Object.assign(
        {},
        testChannel,
        { slug: slug(testChannel.name).toLowerCase() }
      ))
      .expect(res => {
        for (const prop in testChannel) {
          expect(res.body[prop]).to.eql(testChannel[prop])
        }
      }).end(done)
  })
  it('should update the channel in the database', done => {
    agent.get('/channels/' + slug(testChannel.name).toLowerCase())
      .expect(res => {
        for (const prop in testChannel) {
          expect(res.body[0][prop]).to.eql(testChannel[prop])
        }
      }).end(done)
  })
})

describe('/DELETE /channels', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  it('should delete the channel from the database', done => {
    agent.delete('/channels')
      .send({ slug: slug(testChannel.name).toLowerCase() })
      .expect(OK)
      .end(done)
  })
})
