/* eslint-env jest */

import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import Clicker from './'

const fn = jest.fn()

describe('COMPONENT -> Clicker...', () => {
  it('expect increment button click simulation success...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<Clicker trees={{ value: 0 }} increment={onButtonClick} decrement={fn} />)

    wrapper.find('.increment').simulate('click')

    expect(onButtonClick).toHaveProperty('callCount')
    expect(onButtonClick.callCount).toEqual(1)
  })

  it('expect decrement button click simulation success...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<Clicker trees={{ value: 0 }} increment={fn} decrement={onButtonClick} />)

    wrapper.find('.decrement').simulate('click')

    expect(onButtonClick).toHaveProperty('callCount')
    expect(onButtonClick.callCount).toEqual(1)
  })

  it(`expect span text to equal property "trees.value"...`, () => {
    const clicker = shallow(<Clicker trees={{ value: 0 }} increment={fn} decrement={fn} />)

    expect(clicker.find('span').text()).toEqual('0')
  })

  it('expect span to have class "negative" when value < 0...', () => {
    const wrapper = shallow(<Clicker trees={{ value: -1 }} increment={fn} decrement={fn} />)

    expect(wrapper.find('span').hasClass('negative')).toBeTruthy()
  })

  it('expect span to have class "zero" when value === 0...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Clicker trees={{ value: 0 }} increment={fn} decrement={onButtonClick} />)

    expect(wrapper.find('span').hasClass('zero')).toBeTruthy()
  })

  it('expect span to have class "positive" when value > 0...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Clicker trees={{ value: 1 }} increment={fn} decrement={onButtonClick} />)

    expect(wrapper.find('span').hasClass('positive')).toBeTruthy()
  })
})
