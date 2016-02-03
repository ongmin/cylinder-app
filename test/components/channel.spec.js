/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Channel from '../app/components/Channel'
import Player from '../app/components/Player'
import Playlist from '../app/components/Playlist'

describe('<Channel />', () => {
  it('should contain a player', () => {
    const wrapper = shallow(<Channel />)
    expect(wrapper.find(<Player />)).to.exist
  })
  it('should contain a playlist', () => {
    const wrapper = shallow(<Channel />)
    expect(wrapper.find(<Playlist />)).to.exist
  })
})
