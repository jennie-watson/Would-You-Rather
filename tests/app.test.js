import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'
import Header from '../client/components/Header'

test('<App /> contains <Header />', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(<Header />)
  expect(actual).toBe(expected)
})
