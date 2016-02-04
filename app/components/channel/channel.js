'use strict'

import React from 'react'
import Youtube from 'react-youtube'
import Playlist from './playlist'
import SearchBar from './searchBar'

// var Router = require('react-router')
// var Link = Router.Link

export default class Channel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playlist: [],
      currentVideoId: null
    }
  }

  addToPlaylist (video) {
    const newPlaylist = this.state.playlist.concat([video])
    this.setState({ playlist: newPlaylist })
  }

  playVideo (id) {
    this.setState({ currentVideoId: id })
  }

  render () {
    const playerOpts = {
      playerVars: { autoplay: 1 }
    }
    return (
      <div>
        <div className='channelsContainer'>
        <h1>Channel</h1>
          <div id='container-main'>
              <div>
                <h1>Playlist</h1>
                <SearchBar addToPlaylist={this.addToPlaylist.bind(this)} />
              </div>
              <Playlist playlist={this.state.playlist} playVideo={this.playVideo.bind(this)} />
              <Youtube videoId={this.state.currentVideoId} opts={playerOpts} />
          </div>
      </div>
    </div>
    )
  }
}

module.exports = Channel
