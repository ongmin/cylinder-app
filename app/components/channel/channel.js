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
      currentVideoId: null,
      childVisible: true
    }
  }

  addToPlaylist (video) {
    const newPlaylist = this.state.playlist.concat([video])
    this.setState({ playlist: newPlaylist })
  }

  playVideo (id) {
    this.setState({ currentVideoId: id })
  }

  onClick () {
    // console.log(this.state.childVisible)
    this.setState({childVisible: !this.state.childVisible})
  }

  render () {
    const playerOpts = {
      playerVars: { autoplay: 1 }
    }
    return (
        <div className='channelsContainer'>
          <div id='container-top'>
            <div id='container-main'>
              <h1>Channel</h1>
              <Youtube videoId={this.state.currentVideoId} opts={playerOpts} />
            </div>

            <div id='container-rightside'>
              <button id='toggleButton-float' onClick={this.onClick.bind(this)}>BUTTON</button>
              { this.state.childVisible ? <SearchBar id='playlist-searchBar' addToPlaylist={this.addToPlaylist.bind(this)} /> : null }
            </div>
        </div>

          <div id='container-bottom'>
              <h1>Playlist</h1>
              <Playlist playlist={this.state.playlist} playVideo={this.playVideo.bind(this)} />
          </div>

      </div>
    )
  }
}

module.exports = Channel
