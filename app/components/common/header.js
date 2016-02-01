'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (

<div className='topbar'>
  <Link to='app' className='topbar brand'>Cylinder</Link>
      <ul className='topbar'>
        <li><Link to='app'>Home</Link></li>
        <li><Link to='app'>Login</Link></li>
        <li><Link to='app'>Create Profile</Link></li>
        <li><Link to='app'>About</Link></li>
      </ul>
      <form className='topbar-form'>
        <input type='text' className='form-control' placeholder='Search...'></input>
      </form>
</div>
    )
  }
})

module.exports = Header
