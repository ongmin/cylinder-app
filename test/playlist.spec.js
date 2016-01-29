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
})
