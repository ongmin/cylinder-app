var React = require('react')

var Authenticate = React.createClass({
  propTypes: {
    lock: React.PropTypes.object,
    profile: React.PropTypes.object,
    idToken: React.PropTypes.string,
    logOut: React.PropTypes.func
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function () {
    if (this.props.profile) {
      return (
          <button className='button-loginout'onClick={this.props.logOut}>Sign Out</button>
      )
    } else {
      return (
          <button className='button-loginout' onClick={this.showLock}>Sign In</button>
      )
    }
  },

  showLock: function () {
    this.props.lock.show()
  }
})

module.exports = Authenticate
