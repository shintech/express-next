/* eslint-env jest */

import request from 'supertest'

console.log = jest.fn()

describe('SERVER -> GET /api/posts -> api.fetch()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get('/api/trees')
  })

  it('expect response body to have property "value"...', async () => {
    expect(res.body).toHaveProperty('value')
  })

  it('expect response.body.value to equal "0"...', async () => {
    expect(res.body.value).toEqual(0)
  })

  it('expect response body to have property "message"...', async () => {
    expect(res.body).toHaveProperty('message')
  })

  it('expect response.body.message to equal "ok"...', async () => {
    expect(res.body.message).toEqual('ok')
  })
})
