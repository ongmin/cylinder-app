'use strict'

import React from 'react'
import Youtube from 'react-youtube'
import Playlist from './playlist'
import SearchBar from './searchBar'
import Store from '../../stores/store'

// var Router = require('react-router')
// var Link = Router.Link

export default class Channel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playlist: Store.getPlaylist(),
      currentVideoId: '',
      childVisible: true
    }
  }

  playVideo (id) {
    this.setState({ currentVideoId: id })
  }

  onClick () {
    this.setState({childVisible: !this.state.childVisible})
  }

  onChange () {
    this.setState({playlist: Store.getPlaylist()})
  }

  componentDidMount () {
    Store.addChangeListener(::this.onChange)
  }

  componentWillUnmount () {
    Store.removeChangeListener(::this.onChange)
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
              <button id='toggleButton-float' onClick={::this.onClick}>BUTTON</button>
              { this.state.childVisible ? <SearchBar id='playlist-searchBar' /> : null }
            </div>
        </div>

          <div id='container-bottom'>
              <h1>Playlist</h1>
              <Playlist playlist={this.state.playlist} playVideo={::this.playVideo} />
          </div>

      </div>
    )
  }
}

module.exports = Channel
