'use strict'

import React from 'react'
import Youtube from 'react-youtube'
import Playlist from './playlist'
import SearchBar from './searchBar'
import Store from '../../stores/store'
import Actions from '../../actions/Actions'

export default class Channel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playlist: Store.playlist,
      currentVideo: {
        id: {
          videoId: 'DfG6VKnjrVw'
        }
      },
      childVisible: true
    }
  }

  onClick () {
    this.setState({childVisible: !this.state.childVisible})
  }

  onChange () {
    this.setState({
      playlist: Store.playlist,
      currentVideo: Store.currentVideo,
      nextVideo: Store.nextVideo
    })
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
              <Youtube
                videoId={this.state.currentVideo ? this.state.currentVideo.id.videoId : ''}
                onEnd={this.state.nextVideo ? Actions.playNext : null}
                opts={playerOpts} />
              <button id='toggleButton-float' onClick={this.onClick.bind(this)}><i className='fa fa-plus'></i></button>
            </div>

            { this.state.childVisible
              ? <div id='container-rightside'>
              <SearchBar id='playlist-searchBar' />
              </div> : null }
        </div>

          <div id='container-bottom'>
              <h1>Playlist</h1>
              <Playlist playlist={this.state.playlist} />
          </div>

      </div>
    )
  }
}

module.exports = Channel
