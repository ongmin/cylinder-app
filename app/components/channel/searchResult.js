'use strict'

var React = require('react')
var Actions = require('../../actions/Actions')

var SearchResult = React.createClass({
  propTypes: {
    results: React.PropTypes.array
  },

  render: function () {
    const videosDOM = this.props.results.map((result, i) => {
      return <div className='playlist-object' key={result.id.videoId} onClick={this.handleClick.bind(this, i)}>
          <div className='playlist-object-imgbox'>
            <img src={result.snippet.thumbnails.default.url} alt={result.snippet.description} className='playlist-videoitem-img-responsive'/>
            <p className='playlist-videoitem-title'>{result.snippet.title}</p>
          </div>
          <div className='playlist-object-textbox'>
            <p className='playlist-videoitem-channel-title'>{result.snippet.channelTitle}</p>
          </div>
      </div>
    })

    return (
      <div className='videoResult' id='playlist-container'><p id='text-searchresult'>Search Results:</p>{videosDOM}</div>
    )
  },

  handleClick: function (i) {
    Actions.addVideo(this.props.results[i])
    console.dir(this.props.results[i])
  }
})

module.exports = SearchResult
