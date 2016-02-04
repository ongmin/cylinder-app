'use strict'

var React = require('react')

// var Router = require('react-router')
// var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (
      <div className='bodyContainer'>

        <div className='contentContainer'>

          <h3>Welcome to Cylinder</h3>
          <p>Enjoy your <i className='fa fa-youtube'></i>YouTube in peace</p>
          <p>Get started by creating your own channel or join an existing channel</p>
        <div id='container'>
          <div id='monitor'>
            <div id='monitorscreen'>
              <i className='fa fa-plus'> Create your own Channel </i>
            </div>
          </div>
        </div>
      </div>
        <div className='channelsContainer'>

        </div>
    </div>
    )
  }
})

module.exports = Home
