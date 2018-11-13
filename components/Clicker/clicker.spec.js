/* eslint-env jest */

import { shallow } from 'enzyme'
import Clicker from './'

describe('COMPONENT -> Clicker...', () => {
  let clicker = shallow(<Clicker trees={{ value: 0 }} />)

  it(`expect Clicker span text to equal "0"...`, () => {
    expect(clicker.find('span').text()).toEqual('0')
  })
})
