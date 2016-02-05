'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Authenticate = require('./authenticate')

var Header = React.createClass({
  propTypes: {
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
        <li><Link to='about'>About</Link></li>
        <li><Link to='channel'>Channel</Link></li>
        <li><Authenticate className='button-loginout' idToken={this.props.idToken} profile={this.props.profile} /></li>
      </ul>
    </div>
    )
  }
})

module.exports = Header
