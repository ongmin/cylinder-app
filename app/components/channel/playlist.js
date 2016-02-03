// /* global $ */

'use strict'

var React = require('react')
var SearchBar = require('./searchBar')

// var Router = require('react-router')
// var Link = Router.Link

// Fake VIDEOS API (for dev only)
var VIDEOS = [
  {videoId: '8ELbX5CMomE', thumbnail: 'https://i.ytimg.com/vi/8ELbX5CMomE/default.jpg', title: 'Justin Bieber - Sorry (Lyric Video)', artist: 'Justin Bieber'},
  {videoId: 'rYEDA3JcQqw', thumbnail: 'https://i.ytimg.com/vi/rYEDA3JcQqw/default.jpg', title: 'Adele - Rolling in the Deep', artist: 'Adele'},
  {videoId: 'Ri7-vnrJD3k', thumbnail: 'https://i.ytimg.com/vi/Ri7-vnrJD3k/default.jpg', title: 'Adele - Set Fire To The Rain (Live at The Royal Albert Hall)', artist: 'Adele'}
]

var VideoItem = React.createClass({
  propTypes: {
    video: React.PropTypes.object
  },
  render: function () {
    return (
      <div className='object'>
        <div className='object-imgbox'>
          <img src={this.props.video.thumbnail} alt='boohoo' className='videoitem-img-responsive'/>
          <p className='videoitem-title'>{this.props.video.title}</p>
        </div>
        <div className='object-textbox'>
          <p className='videoitem-artist'>{this.props.video.artist}</p>
        </div>
      </div>

    )
  }
})

var VideoTable = React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired
  },
  render: function () {
    var items = []
    this.props.videos.forEach(function (video) {
      items.push(<VideoItem video={video} key={video.title} />)
    })
    return (
    <div className='container-results'>
    {items}
    </div>
    )
  }
})

var Playlist = React.createClass({

  getInitialState: function () {
    return {
      videos: [],
      data: []
    }
  },
  componentDidMount: function () {
    this.autocompleteApi()
  },
  render: function () {
    return (

            <VideoTable videos={VIDEOS}/>

    )
  }
})

module.exports = Playlist
