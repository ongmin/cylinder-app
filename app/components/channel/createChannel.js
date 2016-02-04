'use strict'

var React = require('react')

var CreateChannelPage = React.createClass({
  render: function () {
    return (

        <div className='container' id='form-createChannel'>
          <div className='text-container' id='box-dataentry'>
          <h4>Create a new room.</h4>
              <form className='' action='/channels' method='POST'>
                <p /><input type='text' name='name' placeholder='Name of Channel' size='30' required />
                <br /><input type='text' name='slug' placeholder='Slug (ewww)' size='30' required />
                <br /><input type='text' name='owner' placeholder='Admins' size='30' required />
                <br /><input type='text' name='viewers' placeholder='Include users' size='30' required />
                <br /><input type='text' name='playlist' placeholder='Add videos' size='30' required />
                <br /><button className='form' type='submit'>I can help! :D</button>
              </form>
            </div>
        </div>
      )
  }
})

module.exports = CreateChannelPage
