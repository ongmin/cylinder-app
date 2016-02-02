/* global describe it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Header from '../app/components/common/Header'
import Searchbar from '../app/components/Searchbar'

describe('<Header />', () => {
  it('should display `Cylinder` as the name of the app', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('a.brand')).to.exist
    expect(wrapper.find('a.brand').contains('Cylinder')).to.be.true
  })
  it('should contain some links', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('a')).to.have.length.above(0)
  })
  it('should contain a search bar', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(<Searchbar />)).to.exist
  })
})
