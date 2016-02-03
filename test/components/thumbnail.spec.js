/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Thumbnail from '../app/components/Thumbnail'

describe('<Thumbnail />', () => {
  it('should display the screenshot of the video', () => {
    const wrapper = shallow(<Thumbnail />)
    expect(wrapper.find('img')).to.exist
  })
  it('should display the title of the video', () => {
    const wrapper = shallow(<Thumbnail />)
    expect(wrapper.find('.thumbnail-title')).to.exist
  })
  it('should load video from the playlist to the player when clicked', () => {})
})
