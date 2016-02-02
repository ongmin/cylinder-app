var React = require('react')

var Authenticate = React.createClass({
  propTypes: {
    lock: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      profile: null
    }
  },
  componentDidMount: function () {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.error('Error loading the Profile', err)
        return
      }
      this.setState({profile: profile})
    }.bind(this))
  },

  render: function () {
    if (this.state.profile) {
      return (
        <div className='login-box'>
          <h2>Hello {this.state.profile.nickname}</h2>
          <button onClick={this.logOut}>Sign Out</button>
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
  },
  logOut: function () {
    window.localStorage.removeItem('userToken')
    // React route to home page
    this.setState({profile: null})
    this.context.router.transitionTo('/')
  }
})

module.exports = Authenticate
