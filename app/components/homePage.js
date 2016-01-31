'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (

      <div className='container'>
        <div className='text'>Welcome Home</div>
      </div>
    )
  }
})

module.exports = Home
