/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from './trees'
import C from '../constants'

describe('REDUX -> REDUCER - /trees -> INCREMENT_TREES...', () => {
  const state = {
    value: 1
  }

  const action = {
    type: C.INCREMENT_TREES,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.value to equal "2"...`, () => {
    expect(results.value).toEqual(2)
  })
})

describe('REDUX -> REDUCER - /trees -> DECREMENT_TREES...', () => {
  const state = {
    value: 1
  }

  const action = {
    type: C.DECREMENT_TREES,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.value to equal "0"...`, () => {
    expect(results.value).toEqual(0)
  })
})
