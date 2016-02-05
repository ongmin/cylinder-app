var React = require('react')
var Actions = require('../../actions/Actions')

var Authenticate = React.createClass({
  propTypes: {
    profile: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  login: function () {
    Actions.login(this.props.idToken)
  },

  logout: function () {
    Actions.logout()
    this.context.router.transitionTo('/')
  },

  render: function () {
    console.log(this.props.profile)
    if (this.props.profile) {
      return (
          <button className='button-loginout' onClick={this.logout}>Sign Out</button>
      )
    } else {
      return (
          <button className='button-loginout' onClick={this.login}>Sign In</button>
      )
    }
  }
})

module.exports = Authenticate
