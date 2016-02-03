/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Home from '../app/components/homePage'
import ChannelPreview from '../app/components/ChannelPreview'

describe('<Home />', () => {
  it('should render call to create channel', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.create-channel')).to.exist
  })
  it('should list channel previews', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(<ChannelPreview />)).to.have.length.above(0)
  })
})
