/* global $ */
'use strict'

global.jQuery = require('jquery')

var React = require('react')

// var Router = require('react-router')
// var Link = Router.Link

// Fake VIDEOS API (for dev only)
var VIDEOS = [
  {videoId: '8ELbX5CMomE', thumbnail: 'https://i.ytimg.com/vi/8ELbX5CMomE/default.jpg', title: 'Justin Bieber - Sorry (Lyric Video)', artist: 'Justin Bieber'},
  {videoId: 'rYEDA3JcQqw', thumbnail: 'https://i.ytimg.com/vi/rYEDA3JcQqw/default.jpg', title: 'Adele - Rolling in the Deep', artist: 'Adele'},
  {videoId: 'Ri7-vnrJD3k', thumbnail: 'https://i.ytimg.com/vi/Ri7-vnrJD3k/default.jpg', title: 'Adele - Set Fire To The Rain (Live at The Royal Albert Hall)', artist: 'Adele'}
]

var SearchBar = React.createClass({
  render: function () {
    return (
      <form
        action=''
        method='post'
        id='search-form'>

        <input
          type='text'
          id='search-bar'
          placeholder='Search for videos..'
          ref='searchTextInput' />

        <button
          className='icon'
          id='search-button'
          value='Search'>Search</button>

      </form>
    )
  }
})

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


  fetchTextInput: function () {

  },

  autocompleteApi: function () {
    $.ajax({
      type: 'POST',
      url: 'http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1',
      dataType: 'jsonp',
      data: $.extend({
        q: request.term
      }, { }),
      success: function (data) {
        this.setState({data: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function () {
    return {
      videos: [],
      data: []
    }
  },
  componentDidMount: function () {
    this.autocompleteApi()
    console.log(data)
  },
  render: function () {
    return (
        <div id='container-main'>
            <div>
              <h1>Playlist</h1>
              <SearchBar/>
            </div>

            <VideoTable videos={VIDEOS}/>

        </div>
    )
  }
})

module.exports = Playlist
