'use strict'

var React = require('react')
// var Router = require('react-router')
// var Link = Router.Link

// Fake API (for dev only)

var VIDEOS = [
  {videoId: '8ELbX5CMomE', thumbnail: 'https://i.ytimg.com/vi/8ELbX5CMomE/default.jpg', title: 'Justin Bieber - Sorry (Lyric Video)', artist: 'Justin Bieber'},
  {videoId: 'rYEDA3JcQqw', thumbnail: 'https://i.ytimg.com/vi/rYEDA3JcQqw/default.jpg', title: 'Adele - Rolling in the Deep', artist: 'Adele'},
  {videoId: 'Ri7-vnrJD3k', thumbnail: '"https://i.ytimg.com/vi/Ri7-vnrJD3k/default.jpg"', title: 'Adele - Set Fire To The Rain (Live at The Royal Albert Hall)', artist: 'Adele'}
]

var SearchBar = React.createClass({
  render: function () {
    return (
      <form
        action=''
        method='post'
        id='search-form'>

        <input
          type='search'
          id='search-bar'
          placeholder='Search for videos..'
          value=''
          ref='searchTextInput' />

        <button
          className='icon'
          id='search-button' />

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
      <object>
        <td>{this.props.video.title}</td>
        <td>{this.props.video.artist}</td>
      </object>

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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    )
  }
})

var Playlist = React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
        <div id='container-main'>
            <div>
              <h1>Playlist</h1>
              <SearchBar/>
            </div>

            <div className='container-results'>
            <VideoTable videos={this.props.videos} videos={VIDEOS}/>
                <ul id='search-result' className='search-result'>
                </ul>
            </div>
        </div>
    )
  }
})

module.exports = Playlist
