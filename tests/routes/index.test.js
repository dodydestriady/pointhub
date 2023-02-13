/* eslint-disable no-undef */
const request = require('supertest')
const express = require('express')
const app = express()

describe('GET /api/healthcheck', () => {
  let server
  beforeAll(done => {
    server = app.listen(3000, done)
  })

  afterAll(done => {
    server.close(done)
  })

  it('should return ok', async () => {
    const res = await request(app).get('/api/healthcheck')
    console.log(res.status)
  })
})
