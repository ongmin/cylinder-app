// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Header = require('./common/header')
// var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className='bodyContainer'>
        <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = App
