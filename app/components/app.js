// Disabling check because we can't run strict mode. Need global vars.
/* global Auth0Lock */

var React = require('react')
var app = require('./app')
var Header = require('./common/header')
// var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  getInitialState: function () {
    return {
      idToken: null,
      profile: null
    }
  },

  componentWillMount: function () {
    this.lock = new Auth0Lock('gm22xoo58OOcB8qLEkg6dcohb6vzQnZo', 'caalberts.auth0.com')
    this.idToken = this.getIdToken()
    if (this.idToken) {
      this.setState({ idToken: this.idToken })
      this.lock.getProfile(this.idToken, (err, profile) => {
        if (err) return console.error('Error loading the Profile', err)
        this.setState({profile: profile})
        window.fetch('/users/' + profile.user_id)
          .then(res => {
            if (res.status === 404) return 404
            else return res.json()
          })
          .then(results => {
            let fetchUrl
            let fetchMethod
            if (results === 404) {
              // create new user
              fetchUrl = '/users'
              fetchMethod = 'POST'
            } else {
              // update user
              if (Date.parse(results[0].updated_at) < Date.parse(profile.updated_at)) {
                fetchUrl = '/users/' + profile.user_id
                fetchMethod = 'PUT'
              }
            }
            window.fetch(fetchUrl, {
              method: fetchMethod,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(profile)
            })
          })
      })
    }
  },

  render: function () {
    return (
      <div>
        <div className='headerContainer'>
        <Header lock={this.lock} idToken={this.state.idToken} profile={this.state.profile} logOut={this.logOut.bind(this)}/>
        </div>
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
  },

  getUser: function () {

  },
  logOut: function () {
    window.localStorage.removeItem('userToken')
    // React route to home page
    this.setState({profile: null})
    this.context.router.transitionTo('/')
  }
})

module.exports = App
