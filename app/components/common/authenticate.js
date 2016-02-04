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
        <div className='login-box'>
          <h2>Hello {this.props.profile.nickname}</h2>
          <button onClick={this.props.logOut}>Sign Out</button>
        </div>
      )
    } else {
      return (
        <div className='login-box'>
          <button onClick={this.showLock}>Sign In</button>
        </div>
      )
    }
  },

  showLock: function () {
    this.props.lock.show()
  }
})

module.exports = Authenticate
