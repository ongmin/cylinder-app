'use strict'

var React = require('react')
var dragula = require('react-dragula')
var Actions = require('../../actions/Actions')

var VideoItem = React.createClass({
  propTypes: {
    video: React.PropTypes.object,
    playVideo: React.PropTypes.func
  },

  handleClick: function (e) {
    Actions.playVideo(this.props.video)
  },

  removeVideo: function (e) {
    Actions.removeVideo(this.props.video)
  },

  render: function () {
    return (
      <div>
        <div className='object' onClick={this.handleClick} >
          <div className='object-imgbox'>
            <img src={this.props.video.snippet.thumbnails.default.url} alt={this.props.video.snippet.description} className='videoitem-img-responsive'/>
            <p className='videoitem-title'>{this.props.video.snippet.title}</p>
          </div>
          <div className='object-textbox'>
            <p className='videoitem-channel-title'>{this.props.video.snippet.channelTitle}</p>
          </div>
        </div>
        <button className='remove-video' onClick={this.removeVideo}>&times;</button>
      </div>
    )
  }
})

var VideoTable = React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired,
    playVideo: React.PropTypes.func
  },

  componentDidMount: function () {
    var container = React.findDOMNode(this)
    dragula([container])
  },

  render: function () {
    var items = []
    this.props.videos.forEach((video) => {
      items.push(<VideoItem video={video} key={video.snippet.title} />)
    })
    return (
    <div className='container-results'>
    {items}
    </div>
    )
  }
})

var Playlist = React.createClass({
  propTypes: {
    playlist: React.PropTypes.array.isRequired,
    playVideo: React.PropTypes.func
  },

  render: function () {
    return (
      <VideoTable videos={this.props.playlist} />
    )
  }
})

module.exports = Playlist
