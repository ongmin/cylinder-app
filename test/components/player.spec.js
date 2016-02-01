/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Player from '../app/components/Player'

describe('<Player />', () => {
  it('should contain a div with class \'player\'', function () {
    const wrapper = shallow(<Player />)
    expect(wrapper.hasClass('player')).to.be.true
  })
})
