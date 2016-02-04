render: function () {
  if (this.props.profile) {
    return (
      <div className='login-box'>
        <h2>Hello {this.props.profile.nickname}</h2>
        <button className='button-loginout'onClick={this.logOut}>Sign Out</button>
      </div>
    )
  } else {
    return (
      <div className='login-box'>
        <button className='button-loginout' onClick={this.showLock}>Sign In</button>
      </div>
    )
  }
},
