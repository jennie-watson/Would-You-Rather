import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'
import Header from '../client/components/Header'
import Board from '../client/components/Board'

test('<App /> contains <Header />', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(<Header />)
  expect(actual).toBe(expected)
})

test('<App /> contains <Board />', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(<Board />)
  expect(actual).toBe(expected)
})
