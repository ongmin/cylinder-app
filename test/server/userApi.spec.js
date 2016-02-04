/* global describe it */
import { expect } from 'chai'
import request from 'supertest'
import app from './fixture'
import users from '../../server/routes/users'

app.use('/users', users)

const NOT_FOUND = 404
const OK = 200
const CREATED = 201

let testUser = {
  user_id: 'abc1234def567',
  given_name: 'john',
  family_name: 'doe',
  picture: 'http://localhost/photo.png',
  updated_at: new Date().toString()
}

describe('/GET /users', function () {
  this.timeout(10000)
  it('should list all users', done => {
    request(app).get('/users')
      .expect('Content-Type', /json/)
      .expect(OK)
      .expect(res => {
        expect(res.body).to.be.an('array')
      })
      .end(done)
  })
})

describe('/POST /users', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  it('should create a new user and respond with the object', done => {
    agent.post('/users').send(testUser)
      .expect('Content-Type', /json/)
      .expect(CREATED)
      .expect(res => {
        for (const prop in testUser) {
          expect(res.body[prop]).to.eql(testUser[prop])
        }
      })
      .end(done)
  })
  it('should add new user to the database', done => {
    agent.get('/users')
      .expect(res => {
        const newUser = res.body.find(user => user.user_id === testUser.user_id)
        expect(newUser).to.exist
        for (const prop in testUser) {
          expect(newUser[prop]).to.eql(testUser[prop])
        }
      })
      .end(done)
  })
})

describe('/GET /users/:id', function () {
  this.timeout(10000)
  it('should respond with the user with the respective user_id', done => {
    request(app).get('/users/' + testUser.user_id)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.have.length.above(0)
        for (const prop in testUser) {
          expect(res.body[0][prop]).to.eql(testUser[prop])
        }
      })
      .end(done)
  })
  it('should respond with NOT_FOUND if user_id is not found', done => {
    request(app).get('/users/N0nEx1sTenTId')
      .expect(NOT_FOUND)
      .end(done)
  })
})

describe('/PUT /users/:id', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  testUser.family_name = 'Russel'
  testUser.picture = 'http://google.com/photo.jpg'
  it('should return the updated user', done => {
    agent.put('/users/' + testUser.user_id)
      .send(testUser)
      .expect(res => {
        for (const prop in testUser) {
          expect(res.body[prop]).to.eql(testUser[prop])
        }
      }).end(done)
  })
  it('should update the channel in the database', done => {
    agent.get('/users/' + testUser.user_id)
      .expect(res => {
        for (const prop in testUser) {
          expect(res.body[0][prop]).to.eql(testUser[prop])
        }
      }).end(done)
  })
})

describe('/DELETE /users/:id', function () {
  this.timeout(10000)
  const agent = request.agent(app)
  it('should delete the user from the database', done => {
    agent.delete('/users/' + testUser.user_id)
      .expect(OK)
      .end(done)
  })
})
