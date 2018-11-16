/* eslint-env jest */

import { shallow } from 'enzyme'
import Content from 'components/Content'

describe('COMPONENT -> Content...', () => {
  let clicker = shallow(<Content content='Hello World!' />)

  it(`expect Content p text to equal "Content"...`, () => {
    expect(clicker.find('p').text()).toBe('Hello World!')
  })
})
