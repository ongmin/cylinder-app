'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Authenticate = require('./authenticate')

var Header = React.createClass({
  propTypes: {
    lock: React.PropTypes.object,
    profile: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  render: function () {
    return (

<div className='topbar'>
  <ul className='align-left'>
    <li><Link to='app' id='brand'>Cylinder</Link></li>
    <li><input type='text' className='searchBar' placeholder='Search for channels...'></input></li>
    </ul>
  <ul className='align-right'>
    <li><Link to='app'>Home</Link></li>
    <li><Link to='app'>About</Link></li>
    <li><Link to='channel'>Channel</Link></li>
    {/* <li><Link to='app'>Login</Link></li> */}
    {/* }<li><Link to='app'>Create Profile</Link></li> */}
    <Authenticate lock={this.props.lock} idToken={this.props.idToken} profile={this.props.profile} />
  </ul>
</div>
    )
  }
})

module.exports = Header
