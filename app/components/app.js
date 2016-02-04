// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Store = require('../stores/store')
var Header = require('./common/header')
// var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  getInitialState: function () {
    return {
      profile: Store.getUser(),
      idToken: Store.parseToken()
    }
  },

  onChange: function () {
    this.setState({
      profile: Store.getUser(),
      idToken: Store.getToken()
    })
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChange)
  },

  render: function () {
    return (
      <div>
        <div className='headerContainer'>
        <Header idToken={this.state.idToken} profile={this.state.profile} />
        </div>
        <div className='bodyContainer'>
        <RouteHandler/>
        </div>
      </div>
    )
  }
})

module.exports = App
