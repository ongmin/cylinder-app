'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (

<div className='topbar'>
  <ul className='align-left'>
    <li><Link to='app' id='brand'>Cylinder</Link></li>
    <li><input type='text' className='searchBar' placeholder='Search...'></input></li>
    </ul>
  <ul className='align-right'>
    <li><Link to='app'>Home</Link></li>
    <li><Link to='app'>About</Link></li>
    <li><Link to='channel'>Channel</Link></li>
    <li><Link to='app'>Login</Link></li>
    <li><Link to='app'>Create Profile</Link></li>

  </ul>
</div>
    )
  }
})

module.exports = Header
