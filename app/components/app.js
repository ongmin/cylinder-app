// Disabling check because we can't run strict mode. Need global vars.
/* global Auth0Lock */

var React = require('react')
var Header = require('./common/header')
// var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  componentWillMount: function () {
    this.lock = new Auth0Lock('gm22xoo58OOcB8qLEkg6dcohb6vzQnZo', 'caalberts.auth0.com')
    this.setState({idToken: this.getIdToken()})
  },

  render: function () {
    return (
      <div>
        <Header lock={this.lock} idToken={this.state.idToken}/>
        <div className='bodyContainer'>
        <RouteHandler/>
        </div>
      </div>
    )
  },

  getIdToken: function () {
    var idToken = window.localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        window.localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.error('Error signing in', authHash)
        return null
      }
    }
    return idToken
  }
})

module.exports = App
