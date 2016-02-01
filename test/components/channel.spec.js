/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Channel from '../app/components/channel'
import Player from '../app/components/player'
import Playlist from '../app/components/playlist'

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
