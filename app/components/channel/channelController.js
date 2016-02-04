'use strict'

import React from 'react'
import Playlist from './playlist'
import SearchBar from './searchBar'
import Channel from './channel'
// var Router = require('react-router')
// var Link = Router.Link

var ChannelController = React.createClass({

onChange: function () {

},

  render: function () {
    return (
      <div>
        <div className='channelsContainer'>
        <h1>Channel</h1>

          <div id='container-main'>
              <div>
                <h1>Playlist</h1>
                <SearchBar onChange={this.onChange}/>
              </div>
              <Playlist />
          </div>

      </div>
    </div>
    )
  }
})

module.exports = ChannelController
