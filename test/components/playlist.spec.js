/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Playlist from '../app/components/Playlist'
import Thumbnail from '../app/components/Thumbnail'
import Searchbar from '../app/components/Searchbar'

describe('<Playlist />', () => {
  it('should contain a div with class \'playlist\'', () => {
    const wrapper = shallow(<Playlist />)
    expect(wrapper.hasClass('playlist')).to.be.true
  })
  it('list thumbnails of the videos in the playlist', () => {
    const wrapper = shallow(<Playlist />)
    expect(wrapper.find(Thumbnail)).to.have.length.above(0)
  })
  it('should display a search bar to search for new videos', () => {
    const wrapper = shallow(<Playlist />)
    expect(wrapper.contains(Searchbar)).to.be.true
  })
})
