/* global describe it before */
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import Player from '../app/components/Player'

describe('video player component', () => {
  before('render and locate element', function () {
    const renderedComponent = TestUtils.renderIntoDocument(<Player />)
    this.component = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div')
  })

  it('should contain a div with class \'player\'', function () {
    expect(this.component.className).to.contain('player')
  })
})
