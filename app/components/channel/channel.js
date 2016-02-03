'use strict'

var React = require('react')
var Playlist = require('./playlist')

// var Router = require('react-router')
// var Link = Router.Link

var Channel = React.createClass({
  render: function () {
    return (
      <div>
        <div className='channelsContainer'>
        <h1>Channel</h1>
        <Playlist/>
        </div>
    </div>
    )
  }
})

module.exports = Channel
