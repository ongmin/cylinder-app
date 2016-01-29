/* global describe it before */
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import Playlist from '../app/components/Playlist'

describe('video playlist component', () => {
  before('render and locate element', function () {
    const renderedComponent = TestUtils.renderIntoDocument(<Playlist />)
    this.component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div')
  })

  it('should contain a div with class \'playlist\'', function () {
    expect(this.component.className).to.contain('playlist')
  })
  it('should list all the videos in the playlist', function () {})
  it('should have a search bar to search for new videos', function () {})
  it('should have a delete button to remove video', function () {})
})

describe('video item', () => {
  it('should display the screenshot of the video', function () {})
  it('should display the title of the video', function () {})
  it('should display the summary of the video', function () {})
  it('should load video from the playlist to the player when clicked', function () {})
})

describe('search bar', () => {
  it('should search Youtube for videos', function () {})
  it('should list search results with the screenshot and title', function () {})
  it('should add search result into playlist', function () {})
})

describe('delete video button', () => {
  it('should remove a video from playlist when delete button is clicked', function () {})
})
