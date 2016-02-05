'use strict'

var React = require('react')

var Home = React.createClass({
  render: function () {
    return (
      <div className='bodyContainer'>

        <div className='contentContainer'>

          <h2>Welcome to Cylinder</h2>
          <p>Enjoy your <i className='fa fa-youtube'></i>YouTube in peace..</p>
          <p>Get started by creating your own channel or join an existing channel!</p>
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
