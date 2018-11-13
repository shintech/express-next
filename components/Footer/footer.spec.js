/* eslint-env jest */

import { shallow } from 'enzyme'
import Footer from './'

describe('COMPONENT -> Footer...', () => {
  let message = 'message'
  let footer = shallow(<Footer message={message} />)

  it(`expect Footer messsage text to equal "message"...`, () => {
    expect(footer.find('a span').text()).toBe(message)
  })
})
