/* eslint-env jest */

import { shallow } from 'enzyme'
import Title from './'

describe('COMPONENT -> Title...', () => {
  let clicker = shallow(<Title title='Hello World!' />)

  it(`expect Title h1 text to equal "title"...`, () => {
    expect(clicker.find('h1').text()).toBe('Hello World!')
  })
})
