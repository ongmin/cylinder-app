'use strict'

import React from 'react'
import Playlist from './playlist'
import SearchBar from './searchBar'
// var Router = require('react-router')
// var Link = Router.Link

export default class Channel extends React.Component {
  render () {
    return (
      <div>
        <div className='channelsContainer'>
        <h1>Channel</h1>

          <div id='container-main'>
              <div>
                <h1>Playlist</h1>
                <SearchBar />
              </div>
              <Playlist />
          </div>

      </div>
    </div>
    )
  }
}

module.exports = Channel
